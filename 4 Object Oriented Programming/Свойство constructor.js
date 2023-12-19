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
// constructor является ссылкой на функцию конструктора, которая создала экземпляр; Служить для проверки,
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