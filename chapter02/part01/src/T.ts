function fn<T>(a: T): T{
  return a;
}
fn(10);
fn<string>('hellp');

function fn2<T, K, B>(a: T, b: K, c: B): T {
  console.log(c, b);
  return a;
}
let a = fn2(1, 'ff', false);
