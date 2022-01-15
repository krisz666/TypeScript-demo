let a: object;
a = {};

//{} 用来指定对象中可以包含那些属性
// 语法 {属性名: 属性值， 属性名: 属性值}
// 属性名后加？ 表示属性是可选的
let b: { name: string, age?: number };
b = {
  name: 'aa',
  age: 11,
}

// [propName: string]: any  表示任意类型的属性  propName 随便取的
let c: { name: string, [propName: string]: any };
c = { name: "zbj", a: 1, b: 2 };

// 设置函数结构的类型声明
// let dd: (a: number, b: number) => number;
let d: (a: number, b: number) => number;
d = function (n1, n2) {
  return n1 + n2;
}

/**
 * 数组的类型声明
 *    类型[]
 *    Array<类型>
 */
//string[]表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

let f: number[];

/**
 * 元组 就是固定长度的数组
 * 
 */
let h: [string, string];
h = ['aa', 'bb'];

/**
 * enum 枚举
 * 
 */
enum Gender{ 
  male = 0,
  female = 1,
}
let i: { name: string, gender: Gender };
i = {
  name: "swk",
  gender: Gender.male, 
}



let g: Array<number>
g = [1, 2, 3];

let j: { name: string } & { age: number };
j = { name: "swk", age: 13 };


//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;

k = 2;
// k = 67;
export {}