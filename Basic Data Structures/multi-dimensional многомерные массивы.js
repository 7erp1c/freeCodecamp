//Пример многоуровнего массива
/*
let nestedArray = [
    ['deep'],
     [['deeper'], ['deeper']],
     [[['deepest'], ['deepest']],
        [[['deepest-est?']]]]
];
console.log(nestedArray[2][1][0][0][0]);
*/
//создай массив с deepАМИ в 5 уровней, по 5-ый уровень  с 3-его  дипаются они🙍🏿‍♂️🙍🏿‍♂️🙍🏿‍♂️
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [['deep'],
        [ ['deeper'],[['deepest']],
            ['loop', 'shift', 6, 7, 1000, 'method']
        ]
    ],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];