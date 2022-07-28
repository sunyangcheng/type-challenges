type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// js实现
// 1. 返回一个对象
// 2. 遍历foreach mapped
// 3. 加上readonly 关键字
// 4. obj[key] 取值 indexed

// const MyReadonly = (obj) => {
//   const result = {};
//   for (const key in obj) {
//     result[`readonly ${key}`] = obj[key];
//   }

//   return result;
// }
