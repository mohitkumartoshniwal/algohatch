import { DynamicArray, type DynamicArrayContract } from "algohatch";

const values: DynamicArrayContract<number> = new DynamicArray<number>();
values.append(10);

const first: number = values.get(0);
const snapshot: number[] = values.toArray();
const iterable: Iterable<number> = values;

void first;
void snapshot;
void iterable;
