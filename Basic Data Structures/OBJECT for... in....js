//С помощью лупа for...in.. присвоили объекту переменную food,
// и с помощью нее выводим каждый элемент массива
const refrigerator = {
    'milk': 1,
    'eggs': 12,
};

for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
}

//👩🏿‍🦰👩🏿‍🦰👩🏿‍🦰 С помощью for..in... определите сколько передаётся в объектах true
const users1 = {
    Alan: {
        online: true
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}
function countOnline(allUsers) {
    let result = 0;
    for(const user in allUsers){
        console.log(user);
        console.log(allUsers[user])
        if(allUsers[user].online === true)
        {
            result++;
        }
    }
    return result;
}
console.log(countOnline(users1));