//Правила функции конструктора:
//👀Конструкторы определяются с заглавной буквы, чтобы отличать их от других функций,
//    которые не являются конструкторами.
//👀Конструкторы используют ключевое слово this для задания свойств объекта,
//    который они создадут. Внутри конструктора это относится к новому объекту, который он создаст.
//👀Конструкторы определяют свойства и поведение вместо того, чтобы возвращать значение,
//    как это могли бы сделать другие функции.
//Пример:
    function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }
//Пример 2:
function Dog() {
    this.name = 'Pupa';
    this.color = 'Green';
    this.numLegs = 3
}
//👀 this: внутри конструктора всегда ссылается на создаваемый объект;
function Bird1() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
}
let blueBird = new Bird1();
// 👀Оператор new используется при вызове конструктора; Он создаст новый объект.
// Присвоим переменной hound значения функции конструктора Dog:
function Dog1() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog1();
//👀 Чтобы функция конструктор была универсальная, сделаем так, чтобы она задавала свойства объекта:
//ПРимер:
function Bird2(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
} /* Затем передадим переменную*/ let cardinal = new Bird2("Bruce", "red");
//Пример2:
function Dog(name,color) {
    this.name = name,
        this.color = color,
        this.numLegs = 4
}
let terrier = new Dog ('Gucci','black');