//Пример:
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}
//Существует специально свойство constructor:
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);
//👀👀 constructor является ссылкой на функцию конструктора, которая создала экземпляр; Служить для проверки,
//чтобы понять, что это за объект;
///Пример2:
function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    if (candidate.constructor == Dog){
        return true;
    }else {return false;}
}
//👀👀Существует один важный побочный эффект ручной установки прототипа для нового объекта.
// Это стирает свойство конструктора!
// Это свойство можно использовать для проверки того, какая функция конструктора создала экземпляр,
// но поскольку свойство было перезаписано, теперь оно выдает ложные результаты:
//Пример:
Bird.prototype = {
    constructor: Bird,//Добавим эту строчку, если присваиваем прототип через новый объект, который уже имеет свойства;
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};
//Пример2:
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};