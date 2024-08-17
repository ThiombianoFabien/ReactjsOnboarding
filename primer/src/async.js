import sumValues from "./sum";

export function asyncAdd(values) {
  setTimeout(() => {
    let total = sumValues(values);
    console.log("Async total: ", total);
  }, 500);
}
