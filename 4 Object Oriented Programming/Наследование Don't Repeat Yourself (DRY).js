//Обратите внимание в приведенном ниже примере, что метод describe используется совместно Bird и Dog:
Bird.prototype = {
    constructor: Bird,
    describe: function() {//повтор
        console.log("My name is " + this.name);
    }
};
Dog.prototype = {
    constructor: Dog,
    describe: function() {//повтор
        console.log("My name is " + this.name);
    }
};
//Метод описания повторяется в двух местах.
    //Код можно отредактировать в соответствии с принципом DRY,
// создав супертип (или родительский элемент) с именем Animal:
function Animal() { };
Animal.prototype = {
    constructor: Animal,
    describe: function() {
        console.log("My name is " + this.name);
    }
};
//Поскольку Animal включает в себя метод описания, вы можете удалить его из Bird и Dog:
Bird.prototype = {
    constructor: Bird
};
Dog.prototype = {
    constructor: Dog
};
//Пример:
function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat
};
function Bear(name) {
    this.name = name;
}
Bear.prototype = {
    constructor: Bear
};
function Animal1() {
}
Animal1.prototype = {
    constructor: Animal1, eat: function () {
        console.log("nom nom nom");
    }
};