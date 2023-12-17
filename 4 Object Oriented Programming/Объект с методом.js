//Метод объекта - это свойство, которое является функцией;
//Пример:
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
console.log(duck.sayName());
//Пример2:
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function (){ return 'This dog has '+ dog.numLegs + ' legs.'}
};
console.log(dog.sayLegs());