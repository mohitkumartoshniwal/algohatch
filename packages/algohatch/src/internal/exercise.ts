export function exercisePending(topic: string): never {
  throw new Error(`${topic} is a prepared owner implementation exercise`);
}
