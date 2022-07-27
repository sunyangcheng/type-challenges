type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};

// js实现
// 1. 返回一个对象
// 2. 遍历foreach mapped
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 3. todo[key] 取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. 判断key是否在todo中
//    1. keyof lookup
//    - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
//    2. 约束 constraint 
//    - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

// const pickFn = (todo, keys) => {
//   const obj = {};
//   keys.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//   });
//   return obj;
// };
