//Синтаксис добавление свойств через prototype конструктор.prototype.key = свойство;
//Есть функция конструктор:
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let duck = new Bird("Donald");
let canary = new Bird("Donald");
//У всех экземпляров будет одинаковый numLegs;
//Bird.prototype.numLegs = 2;
console.log(duck.numLegs);
console.log(canary.numLegs);
//создадим прототип для Dog:
function Dog(name){
    this.name = name;
}
Dog.prototype.numLegs =4;
let terrier = new Dog('Grom');

// Более эффективный способ - присвоить прототипу новый объект,
//который уже содержит свойства. Таким образом, свойства добавляются все сразу:
//Пример:
function Dog1(name) {
    this.name = name;
}
Dog1.prototype = {
    numLegs:4,
    eat:function(){
        console.log("nom nom nom");
    },
    describe: function(){
        console.log("You");
    }
};
//👀👀 Объект наследует свой прототип непосредственно от создавшей его функции-конструктора.
// Например, здесь конструктор Bird создает объект duck:
function Bird2(name) {
    this.name = name;
}
let duck2 = new Bird2("Donald");//duck наследует свой прототип от функции-конструктора Bird.
// Вы можете показать эту связь с помощью метода isPrototypeOf:
Bird.prototype.isPrototypeOf(duck);
//Пример:
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

//👀👀 Цепочка прототипа объекта:
//
  //Все объекты в JavaScript (за некоторыми исключениями) имеют прототип.
  // Кроме того, прототип объекта сам по себе является объектом.
function Bird31(name) {
    this.name = name;
}
typeof Bird31.prototype;
//Поскольку прототип - это объект, у прототипа может быть свой собственный прототип!
// В данном случае прототипом Bird.prototype является Object.prototype:
Object.prototype.isPrototypeOf(Bird.prototype);
//Чем это полезно? Возможно, вы помните метод hasOwnProperty из предыдущего задания:
let duck31 = new Bird("Donald");
duck31.hasOwnProperty("name");
//Пример:
function Dog3(name) {
    this.name = name;
}
let beagle3 = new Dog3("Snoopy");
Dog3.prototype.isPrototypeOf(beagle3);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype);//
/* Метод hasOwnProperty определен в Object.prototype, к которому может получить доступ Bird.prototype,
к которому затем может получить доступ duck.
 Это пример цепочки прототипов. В этой цепочке прототипов Bird является супертипом для duck,
в то время как duck является подтипом.
 Object является супертипом как для Bird, так и для duck.
 Object является супертипом для всех объектов в JavaScript.
 Следовательно, любой объект может использовать метод hasOwnProperty.*/
