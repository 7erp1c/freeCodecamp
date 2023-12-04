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

// Only change code below this line
const bananas = 'bananas';
foods[bananas] = 13;
foods.grapes = 35;
foods['strawberries'] = 27;

// Only change code above this line

console.log(foods);