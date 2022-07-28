type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// keyof array -> index
// const tuple = ['tesla', 'model 3', 'model X', 'model Y', 123] as const
// type t = TupleToObject<typeof tuple>

// js实现
// 1. 返回一个对象
// 2. 遍历元组
// 3. 取值，构造{key: key, value: value}对象

// function TupleToObject(tuple) {
//   const result = {};
//   for(const val of tuple) {
//     result[val] = val;
//   }

//   return result;
// }