

//
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    let everyOne = ['Alan', 'Jeff', 'Sarah','Ryan'];//определим переменную с массивом для прогона в лупефор
    for(let i = 0; i<everyOne.length;i++){
        let stud = everyOne[i];//определим переменную для приёма итеррируемых данных
        if(userObj.hasOwnProperty(stud) === false){//условный массив данных проверяем на наличие ключей объекта
            return false;
        }
    }
    return true
// Only change code above this line
}

console.log(isEveryoneHere(users));