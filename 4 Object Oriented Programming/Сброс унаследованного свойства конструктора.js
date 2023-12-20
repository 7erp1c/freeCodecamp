//Когда объект наследует свой прототип от другого объекта, он также наследует свойство конструктора супертипа.
// Вот пример:
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
//Но duck и все экземпляры Bird должны показывать, что они были созданы Bird, а не Animal.
// Для этого вы можете вручную установить свойство конструктора Bird для объекта Bird:
Bird.prototype.constructor = Bird;
duck.constructor
//Пример:
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();