# 面试相关

## symbol是什么基本数据类型还是引用数类型
  symbol基本数据类型,Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法
  * 不可以使用`new`
  >语法格式: 
  >```js
  >Symbol([description]) //description是可选的
  >```
  * `Symbol`全局共享
  ```js
  Symbol.for() //只有一个参数;注册全局symbol
  Symbol.keyFor() //只有一个参数，返回的是key;获取注册表的Symbol。
  * `Symbol`不支持类型转换

  let name = Symbol.for('name');
  let name1 = Symbol.for('name1');
  let name2 = Symbol.for('name2');

  console.log(Symbol.keyFor(name)) // name
  console.log(Symbol.keyFor(name1)) // name1
  console.log(Symbol.keyFor(name2)) // name2
  ```
## for in和for of的区别
>推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of。
>`for...in`循环出的是key，`for...of`循环出的是value
  * for in

    `for in`以任意顺序遍历一个对象自有的、继承的、可枚举的、非Symbol的属性。对于每个不同的属性，语句都会被执行。  

    `for in` 遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性。

    `for in`循环，只能获得对象的键名，不能直接获取键值。
    
    ```js
      var arr = ['a', 'b', 'c', 'd'];
      for (let a in arr) {
           console.log(a); // 0 1 2 3
      }
      for (let a of arr) {
           console.log(a); // a b c d
      }
    ```

    只遍历自身的可枚举属性，可以使用 `hasOwnProperty`

    ```js
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          console.log(`obj.${prop} = ${obj[prop]}`);
        } 
      }
    ```

  * for of

    for...of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环



## 那些方法改变原数组,哪些不会改变原数组  
  * 改变
    * pop():删除 
    * push() 
    * reverse()
    * shift()
    * sort()
    * splice()
  
  * 不改变
    * concat()
    * join()
    * slice()
    * filter()
    * reduce() 
  
## ES5和ES6的继承方式?
>ES5 是通过构造函数来声明一个“类”，在 ES6 中 通过关键字 Class 来进行声明。但是 ES5 的构造函数存在变量提升，但是 Class 声明不存在变量提升。

>ES5 通过修改原型链进行继承，ES6 通过关键字extend进行继承，但是子类的constructor调用时，需要先利用super调用父类的构造方法。

  * ES5继承的实质，是通过将父类的方法添加到子类的实例中。
  * ES6继承的实质，是通过将父类的属性和方法添加到this中，即将父类的属性和方法添加到子类实例对象上，即子类的实例其实是基于父类创建的。这也就是为什么在ES6继承中，子类的构造函数必须先调用super方法才能调用this。

>ES5—寄生组合式继承
  ```js
//父类
function SuperType(name){
    //父类实例属性
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
//父类原型方法
SuperType.prototype.sayName = function(){
    alert(this.name);
};
//子类
function SubType(name, age){
    SuperType.call(this, name);//1.借用构造函数：继承父类的实例属性；
    this.age = age;
}
//2.寄生式继承：将父类原型的副本强制赋值给子类原型，实现继承父类的原型方法。
inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    alert(this.age);
};

function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); //创建父类原型的副本
    prototype.constructor = subType; //将该副本的constructor属性指向子类
    subType.prototype = prototype; //将子类的原型属性指向副本
}
  ```

>ES6 class继承
## super方法的作用
## TS的泛型
## TS私有属性和受保护的数据的属性关键字
## Vue3和Vue2的区别
## Mixin的原理
  >mixin 本质上是一个浅拷贝
## Es6
## keep-alive的两个生命周期
> https://github.com/haizlin/fe-interview/issues/551
## 轮播图组件思路
## webpack多页面
## 将一个字符串反向
```js
str.split('').reverse().join('')
```