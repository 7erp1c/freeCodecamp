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