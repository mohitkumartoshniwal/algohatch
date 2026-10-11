import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { access, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const packageDirectory = join(repositoryRoot, "packages", "algohatch");
const pnpmCli = process.env.npm_execpath;

if (!pnpmCli) {
  throw new Error("Run package validation through pnpm so its CLI path is available.");
}

function runNode(args, cwd = repositoryRoot) {
  const result = spawnSync(process.execPath, args, {
    cwd,
    env: { ...process.env, CI: "true" },
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Command failed with exit code ${result.status}: node ${args.join(" ")}`);
  }
}

function runPnpm(args, cwd = repositoryRoot) {
  runNode([pnpmCli, ...args], cwd);
}

const temporaryDirectory = await mkdtemp(join(tmpdir(), "algohatch-package-"));

try {
  runPnpm(["--filter", "algohatch", "pack", "--pack-destination", temporaryDirectory]);

  const tarballs = (await readdir(temporaryDirectory)).filter((file) => file.endsWith(".tgz"));
  assert.equal(tarballs.length, 1, "Package validation expected exactly one tarball.");

  const tarball = join(temporaryDirectory, tarballs[0]);
  const publintCli = join(repositoryRoot, "node_modules", "publint", "src", "cli.js");
  const typesCli = join(
    repositoryRoot,
    "node_modules",
    "@arethetypeswrong",
    "cli",
    "dist",
    "index.js",
  );

  runNode([publintCli, "run", tarball, "--strict"]);
  runNode([typesCli, tarball, "--profile", "esm-only"]);

  await writeFile(
    join(temporaryDirectory, "package.json"),
    `${JSON.stringify({ private: true, type: "module" }, null, 2)}\n`,
  );
  runPnpm(["add", "--offline", tarball], temporaryDirectory);

  const installedPackage = join(temporaryDirectory, "node_modules", "algohatch");
  const requiredFiles = [
    "LICENSE",
    "README.md",
    "dist/index.js",
    "dist/index.d.ts",
    "package.json",
  ];

  for (const file of requiredFiles) {
    await access(join(installedPackage, file));
  }

  const repositoryLicense = await readFile(join(repositoryRoot, "LICENSE"), "utf8");
  const packageLicense = await readFile(join(packageDirectory, "LICENSE"), "utf8");
  assert.equal(packageLicense, repositoryLicense, "Root and package MIT licenses must stay equal.");

  const manifest = JSON.parse(await readFile(join(installedPackage, "package.json"), "utf8"));
  assert.deepEqual(
    Object.keys(manifest.exports),
    ["."],
    "The package must expose only its root entry point.",
  );

  await writeFile(
    join(temporaryDirectory, "runtime-check.mjs"),
    `import assert from "node:assert/strict";

const root = await import("algohatch");
assert.deepEqual(Object.keys(root), []);

await assert.rejects(import("algohatch/queue"), {
  code: "ERR_PACKAGE_PATH_NOT_EXPORTED",
});
await assert.rejects(import("algohatch/package.json", { with: { type: "json" } }), {
  code: "ERR_PACKAGE_PATH_NOT_EXPORTED",
});
`,
  );
  runNode([join(temporaryDirectory, "runtime-check.mjs")], temporaryDirectory);

  console.log("Packed artifact, declarations, files, and runtime entry point are valid.");
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
