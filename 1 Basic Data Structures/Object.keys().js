//Object.keys() объединяет все ключи объекта в массив:
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function getArrayOfUsers() {

    return Object.keys(users);

}

console.log(getArrayOfUsers(users));