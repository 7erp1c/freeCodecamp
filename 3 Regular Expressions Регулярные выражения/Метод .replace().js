//Синтаксис:
/*
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
 */ //ПРИМЕР:
let str = "one two three";
let fixRegex = /^(\w+)\s(\w+)\s(\w+)$/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
//Вы также можете получить доступ к группам захвата в строке замены со знаками доллара ($).
//
+n.toString().replace(/0+$/,'');//убирает нули в конце и сохраняет знак;
//
string.replace(/[A-Z]/g, ' $&');// Найдет большую букву в строке и вернет всю строку, с пробелом перед большой буквой;
//
string.replace(/5/gi,'S').replace(/0/gi,'O').replace(/1/gi,'I');// Найти в строке определенные символы и заменить их