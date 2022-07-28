type MyExclude<T, U> = T extends U ? never : T;

// type t1 = MyExclude<'a' | 'b' | 'c', 'a'>;
// type t2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>;

// js实现
function MyExclude(T, U) {
  return T.filter(v => !U.includes(v));
}