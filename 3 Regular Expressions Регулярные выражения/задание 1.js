//    В именах пользователей могут использоваться только буквенно-цифровые символы.
//    В конце имени пользователя должны быть только цифры.
//    В конце их может быть ноль или более.
//    Имя пользователя не может начинаться с цифры.
//    Буквы имени пользователя могут быть строчными и прописными.
//    Длина имен пользователей должна составлять не менее двух символов.
//    В двухсимвольном имени пользователя в качестве символов могут использоваться только буквы алфавита.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

//  ^ - начало ввода
//  [a-z] - первый символ - буквы
//  [0-9][0-9]+ - заканчивается двумя или более цифрами
//  | - или
//  [a-z]+ - имеет одну или несколько следующих букв
//  \d* - и заканчивается нулем или более числами
//  $ - конец ввода
//  i - игнорировать регистр ввода