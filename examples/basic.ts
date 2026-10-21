import { withTimeout } from "../dist/index.js";
console.log(await withTimeout(Promise.resolve("ready"), 1000));
