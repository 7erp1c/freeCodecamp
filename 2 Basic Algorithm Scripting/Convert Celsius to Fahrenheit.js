//Используем формулу для конвертирования температуры по цельсию в темпер по фаренгейту
function convertCtoF(celsius) {
    let fahrenheit = celsius*(9/5) + 32;
    return fahrenheit;
}

convertCtoF(30);