import additionFunction from "./sum";
import { asyncAdd } from "./async";

let values = [100, 50, 1, 9];

// let total = additionFunction(values);

let total = asyncAdd(values);

console.log(total);
