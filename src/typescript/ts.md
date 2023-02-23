# ts学习笔记
## 类型
  * unknown表示未知类型的值
  * any是任意类型的值
  ```ts
  let e: unknown;
  e = 10;
  e = 'hello';
  let s: string;
  s = d;
  ```
  d的类型是any，它可以赋值给任意变量。unknown实际是一个类型安全的any，不能直接赋值给其他变量
  * 类型断言 可以用来告诉解析器变量的实际类型
  1. 变量 as 类型
  2. <类型> 变量
  ```ts
  s = o as string;
  s = <string> o
  ```
  * void 用来表示空，以函数为例，就表示没有返回值的函数
  ```ts
  function fn(): void {}
  ```
  * never 表示永远不会返回结果
  ```ts
  function fn2(): never {
    throw new Error('error');
  }
  ```

  * [propName: string]: any 表示任意类型的属性
  ```ts
  let obj = {name: string, [propName:string]: any}
  obj = {name:'lisi', age: 19}
  ```
  * 设置函数结构的类型声明：(形参：类型，形参：类型...) => 返回值
  ```ts
  let d: (a: number, b: number) => number;
  ```
  * 数组的表示
  类型[]  Array<类型>
  * 枚举
  ```ts
  enum Gender{
    Male = 0,
    Female = 1,
  }
  let i = {name: string, gender: Gender}
  i = {
    name: 'lisi',
    gender: Gender.Male
  }
  ```
  * 类型别名
  ```ts
  type myType = 2 | 3 | 4 | 5;
  let k: myType;
  k = 2;
  ```
