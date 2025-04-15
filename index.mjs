import { clamp } from "@gabe-lepo/shared-utils-test";

console.log(`-1 clamped is: ${clamp(0, 100, -1)}`)
console.log(`5000 clamped is: ${clamp(0, 100, 5000)}`)
