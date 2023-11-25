const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
/* По ES5, присваиваем переменным значения объекта:
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
*///По упрощённому методу ES6, присволии переменным today и tomorrow соответствующие значения из объекта:
const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;
// Можно присвоить имя; в скобках после двоиточия указываем имя переменной
const {today : highToday} = HIGH_TEMPERATURES;
const {tomorrow : highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday);
console.log(today);//самоприсаивание имени переменной;
//Тоже самое с вложенными объектами:
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
/*
const lowToday = LOCAL_FORECAST.today.low;
const high1Today = LOCAL_FORECAST.today.high;
*/
const {today:{low:lowToday}} = LOCAL_FORECAST;
const {today:{high:high1Today}} = LOCAL_FORECAST;


