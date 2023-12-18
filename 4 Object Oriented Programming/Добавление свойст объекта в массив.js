//Lesson: Understand Own Properties:
//с помощью hasOwnProperty и цикла for добавим свойства объекта в массив:
function Bird(name) {//Функция Bird определяет свойства объекта, хранящихся в ней, для duck & canary
    this.name = name;
    this.numLegs = 2;
}
let duck = new Bird("Donald");//Переменная duck получила копию функции конструктора Bird
console.log(duck);
let canary = new Bird("Tweety");
//Добавляем ключи объекта в массив, через копию в переменной duck:
let ownProps = [];
for (let i in duck) {
    if(duck.hasOwnProperty(i)) {
        ownProps.push(i);
    }
}
console.log(ownProps);
//сделаем тоже самое для canary:
let ownProperty2 = [];
for (let i in canary){
    if(canary.hasOwnProperty(i)){
        ownProperty2.push(i);
    }
}
console.log(ownProperty2);
// так как hasOwnProperty добавляет только собственные свойства, напишем добавление в массив для
// собственных свойств и прототипов;
//Пример:
    function Bird1(name) {
        this.name = name;  //own property
    }
Bird1.prototype.numLegs = 2; // prototype property
let duck1 = new Bird1("Donald");
//Добавление в массив:
let ownProps1 = [];
let prototypeProps = [];
for (let i in duck) {
    if(duck1.hasOwnProperty(i)) {
        ownProps1.push(i);
    } else {
        prototypeProps.push(i);
    }
}
console.log(ownProps1);
console.log(prototypeProps);

//Пример 2:
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps2 = [];
let prototypeProps1 = [];
for(let i in beagle){
    if(beagle.hasOwnProperty(i)){
        ownProps2.push(i);
    }else {
        prototypeProps1.push(i);
    }
}