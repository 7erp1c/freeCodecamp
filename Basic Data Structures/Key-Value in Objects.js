/*
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};
//добавление свойств объекта :
//👦🏿точечная нотация (объект.ключ = значение):
tekkenCharacter.origin = 'South Korea';
//👩🏿cкобочная нотация(объект['ключ']=значение) если в ключе есть пробел, всегда в ковычках:
tekkenCharacter['hair color'] = 'dyed orange';
// 👧🏿назначение через переменную:
const eyes = 'eye color';//назначаем ключ
tekkenCharacter[eyes] = 'brown';//в объекте черезпеременную назначаем
{
    player: 'Hwoarang',
        fightingStyle: 'Tae Kwon Doe',
    human: true,
    origin: 'South Korea',
    'hair color': 'dyed orange',
    'eye color': 'brown'
};*/
//Добавить любыми способами 3 ключа и значения соответсвенно в объект foods:
const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
const bananas = 'bananas';
foods[bananas] = 13;
foods.grapes = 35;
foods['strawberries'] = 27;
console.log(foods);
//Обращение к свойству объекта:
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

//Передача в функцию:
let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    let inv1 = foods1[scannedItem];
    return inv1;
}
console.log(checkInventory("apples"));