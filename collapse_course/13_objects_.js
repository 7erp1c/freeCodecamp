//🧨🧨🧨 Build JavaScript Objects
const myDog = {
    // Only change code below this line
    name: "Lucifer",
    legs: 4,
    tails: 1,
    friends: ["Obi", "bark"]

    // Only change code above this line
};
//🎈🎈🎈 Accessing Object Properties with Dot Notation
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//🎃🎃🎃 Получаем значение объекта с помощью квадратных скобок
const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj1["an entree"];   // Change this line
const drinkValue = testObj1["the drink"];    // Change this line

//🎨🎨🎨 Присвоение значения объекта с помощью переменной
// Setup
const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;  // Change this line
const player = testObj2[playerNumber];   // Change this line

//🎁🎁🎁 Изменение значения свойства объекта через переменную.
const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog1.name = "Happy Coder";

//🎭🎭🎭 Добавление нового свойства объекта через переменную
const myDog2 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog2.bark = "bow-wow";

//🥼🥼🥼 Удаление свойства объекта через переменную
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog3.tails;

//🧶🧶🧶 Функция поиска свойства объекта через фун
// Setup
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    return lookup[val];
    return result;
}
phoneticLookup("charlie");
//🎗🎗🎗🎗🎈🎈🎈🎈Проверка объекта на элементы с помощью .hasOwnProperty🧧🧧🧧🧧🧧
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp))
    {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}
//🎈🎈🎈 Создаём вложенный объект
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
    ,
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];
//✨✨✨✨ Назначить const gloveBoxContents = "maps"
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];