//Если объект имеет множетсво запросов, вместо точечной нотации, для доступа к определенным свойствам,
// лучше использовать ключевое слово this:
//Пример:
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
};
// если измениться имя объекта duck на dog, не потребуется изменять ссылки внутри объекта;
//Пример 2:
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();