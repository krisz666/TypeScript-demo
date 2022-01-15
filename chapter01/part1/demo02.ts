//声明变量 同时指定类型为number
let a: number;

a = 10;
// a = 'hello'; //a的类型为number 不能赋值字符串
let b: string;
// b = 123;
b = "lao";

// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let c = false;
c = true;
// c = 123;

function sum(a:number, b:number):number{ //返回值也可以指定类型
  return a + b;
}
let result = sum(1, 3);
console.log(sum(123, 345));




