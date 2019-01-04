// 1.原型链继承
function Parent() {
    this.name = 'Luffy'
    this.citys = ['dalian', 'beijing']
}

Parent.prototype.getName = function() {
    console.log(this.name)    
}

function Child() {}

Child.prototype = new Parent()

var child1 = new Child()
var child2 = new Child()
console.log(child1.name) // Luffy
child1.getName() // Luffy

child1.citys.push('shenyang')
console.log(child1.citys) // ['dalian', 'beijing', 'shenyang']
console.log(child2.citys) // ['dalian', 'beijing', 'shenyang']

/*
缺点：
    1.创建子类实例时不能向父类传参
    2.应用类型的属性被所有实例共享
*/



// 2.构造函数继承（经典继承）
function Parent(name) {
    this.name = name
    this.citys = ['dalian', 'beijing']
    this.getName = function() {
        console.log(this.name)
    }
}

function Child(name) {
    Parent.call(this, name)
}

var child1 = new Child('Luffy')
var child2 = new Child('Zoro')
console.log(child1.name) // Luffy
child1.getName() // Luffy

child1.citys.push('shenyang')
console.log(child1.citys) // ['dalian', 'beijing', 'shenyang']
console.log(child2.citys) // ['dalian', 'beijing']

/*
优点：
    1.避免了所有实例共享引用类型属性
    2.子类可以向父类传参
缺点：
    1.方法都要定义在构造函数内，每次实例化都会创建一遍方法
*/




// 3.组合继承（原型链继承 + 经典继承）
function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name) {
    Parent.call(this, name)
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child = new Child('luffy')
console.log(child.name)
child.getName()

/*
优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式
*/



// 4.原型式继承
function CreateObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

/*
 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型
 缺点:包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样
*/



// 5.寄生式继承
function CreateObj(o) {
    var obj = Object.create(o)
    obj.name = 'Luffy'
    obj.getName = function() {
        console.log(this.name)
    }

    return obj
}

/*
缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法
*/



// 6.寄生组合式
function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

function F() {}
F.prototype = Parent.prototype
Child.prototype = new F()

var child = new Child('Luffy', 18)
console.log(child.name)
console.log(child.age)
child.getName()

/* 
这种方式的高效率体现它只调用了一次 Parent 构造函数，
并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。
开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
*/
