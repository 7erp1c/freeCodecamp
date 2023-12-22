//Функция-конструктор, наследующая свой объект-прототип от функции-конструктора супертипа,
// все еще может иметь свои собственные методы в дополнение к унаследованным методам.
    //Например, Bird - это конструктор, который наследует свой прототип от Animal:
function Animal() { }
    Animal.prototype.eat = function () {
        console.log("nom nom nom");
    };
function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
//В дополнение к тому, что унаследовано от Animal, вы хотите добавить поведение, уникальное для объектов Bird.
// Здесь Bird получит функцию fly(). Функции добавляются в прототип Bird так же, как и любая функция конструктора:
    Bird.prototype.fly = function () {
    console.log("Я лечу!");
};
//Теперь экземпляры Bird будут иметь методы eat() и fly():
let duck = new Bird();
duck.eat();
duck.fly();
//duck.eat() отобразит строку nom nom nom в консоли, а duck.fly() отобразит строку I'm flying!.
//Пример:
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
};
let beagle = new Dog();