// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never

type ages = [1,2,3]
type t1 = ages[number] // 1 | 2 | 3

type t2 = 1 extends ages[number] ? "true" : "false"

type l1 = Last<ages> // 3

// js实现
// function getFirst(arr) {
//   const [first, ...rest] = arr;
//   return first ? first : "never";
// }

// 1. extends 类型条件判断
// 2. 获取tuple的length属性
// 3. extends union
// 4. infer使用(推断)