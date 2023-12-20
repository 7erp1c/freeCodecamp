//В предыдущем задании вы создали супертип под названием Animal,
// который определял поведение, общее для всех животных:
function Animal() { }
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};
//  В этом и следующем задании будет рассмотрено, как повторно использовать методы Animal внутри Bird и Dog,
// не определяя их заново. В нем используется метод, называемый наследованием.
//   В этом задании рассматривается первый шаг: создайте экземпляр супертипа (или родительского).
//   Вы уже знаете один способ создать экземпляр Animal с помощью оператора new:
let animal = new Animal();
//  Использование этого синтаксиса для наследования имеет некоторые недостатки, которые слишком сложны для масштабов данной
//задачи.
//  Вместо этого, вот альтернативный подход без этих недостатков:
let animal = Object.create(Animal.prototype);
//Object.create(obj) создает новый объект и устанавливает obj в качестве прототипа нового объекта. Напомним,
// что прототип подобен "рецепту" для создания объекта.
//Устанавливая прототип animal в качестве прототипа Animal, вы фактически даете экземпляру animal тот же "рецепт",
// что и любому другому экземпляру Animal.
animal.eat();
animal instanceof Animal;//The instanceof method here would return true.
//Пример:
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

//👀👀 Установите прототип подтипа (или дочернего элемента) — в данном случае Bird — в качестве экземпляра Animal
Bird.prototype = Object.create(Animal.prototype);
//Помните, что прототип подобен "рецепту" для создания объекта.
// В некотором смысле, рецепт для птицы теперь включает все ключевые "ингредиенты" из Animal.
let duck = new Bird("Donald");
duck.eat();
//duck  наследует все свойства Animal, включая способ eat.
//Пример:
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
let beagle = new Dog();