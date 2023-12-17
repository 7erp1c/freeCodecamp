
//ПЕРЕМЕННАЯ instanceof ФУНКЦИЯ; проверяет переменную на связь с функцией...
//...конструктором объекта.
// Пример:
let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let crow = new Bird("Alexis", "black");
console.log(crow instanceof Bird);

//Пример2:
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House (4);
console.log(myHouse instanceof House);

//Пример3: С обычным объектом
let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};
console.log(canary instanceof Bird);//false