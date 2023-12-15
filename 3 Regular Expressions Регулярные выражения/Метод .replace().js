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