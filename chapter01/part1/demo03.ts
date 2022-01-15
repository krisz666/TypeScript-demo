let a: 10;
a = 10;
// a = 11;
let b: "male" | "female";
b = 'male';
b = "female"
//连接多个类型(联合类型)
let c: boolean | string;
c = false;
c = "aa";

//any 表示的是任意类型  相当于关闭了ts的类型检测
//使用ts 不建议使用any
let d: any;
d = 19;
d = "dd";
d = false;
//unknown 表示未知类型
let e: unknown;
e = "world";
e = 10;

let s: string;
//d的类型any 可以赋值给任意变量
s = d;

// s = e;
//unknown 实际上就是一个类型安全的any
//unknown 类型的变量 不能直接赋值给其他变量
if (typeof e === "string") {
  s = e;
}

//类型断言  可以告诉解析器 变量的实际类型
s = e as string;
s = <string>e;
//类型断言
/**
 * 语法
 *    变量 as 类型
 *    <类型>变量
 */

function fn(num:number): void{ 
  if (num > 0) {
    // return true;
  }
}

//void 用来表示空, 以函数为例， 就表示没有返回值的函数 null undefined
function fn1(): void{
  
}

//never 表示永远不会返回结果
function fn2(): never {
  throw new Error('报错了');
}
export {}