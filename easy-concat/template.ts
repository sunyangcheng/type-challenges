type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// js实现
// function Concat(T, U) {
//   return [...T, ...U];
// }