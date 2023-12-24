/*   Imagine a file called math_functions.js that contains several functions related to mathematical
operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum.
You want to use this function in several different JavaScript files. In order to share it with these other files,
you first need to export it.

export const add = (x, y) => {
  return x + y;
}

   The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}

export { add };

   When you export a variable or function, you can import it in another file and use it without having to rewrite
the code. You can export multiple things by repeating the first example for each thing you want to export,
or by placing them all in the export statement of the second example, like this:

export { add, subtract };*/
const uppercaseString = (string) => {
    return string.toUpperCase();
}
const lowercaseString = (string) => {
    return string.toLowerCase()
}
export {uppercaseString, lowercaseString};
//______________________________________________________________________________________
/*  import allows you to choose which parts of a file or module to load.
In the previous lesson, the examples exported add from the math_functions.js file.
Here's how you can import it to use in another file:

    import { add } from './math_functions.js';

Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest.
The ./ tells the import to look for the math_functions.js file in the same folder as the current file.
The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:

    import { add, subtract } from './math_functions.js';  */

// Добавьте соответствующий оператор импорта, который позволит текущему файлу использовать функции uppercaseString и
// lowercaseString, которые вы экспортировали в предыдущем уроке.
// Эти функции находятся в файле string_functions.js, который находится в том же каталоге, что и текущий файл.
uppercaseString('HELLO, WORLD!');
lowercaseString('hello,world!');

import {uppercaseString, lowercaseString} from "./string_functions.js";

// Если вы хотите импортировать все, используйте символ * :
/*
import * as myMathModule from "./math_functions.js";
    Приведенный выше оператор import создаст объект под названием myMathModule.
Это просто имя переменной, вы можете назвать ее как угодно. Объект будет содержать все экспортируемые функции
из math_functions.js, поэтому вы можете обращаться к ним, как к любому другому свойству объекта.
Вот как можно использовать функции сложения и вычитания, которые были импортированы:

myMathModule.add(2,3);
myMathModule.subtract(5,3);
*/
//Пример:
import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/*
 Существует еще один синтаксис экспорта, который необходимо знать, - это экспорт по умолчанию.
Обычно этот синтаксис используется, если из файла экспортируется только одно значение.
Он также используется для создания резервного значения для файла или модуля.
Пример export default:

export default function add(x, y) {
  return x + y;
}
export default function(x, y) {
  return x + y;
}
Первая - это именованная функция, а вторая - анонимная.

Поскольку export default используется для объявления резервного значения для модуля или файла,
в каждом модуле или файле может быть только одно значение, экспортируемое по умолчанию.
Кроме того, вы не можете использовать export default с var, let или const
 */
// Пример:
export default function subtract(x, y) {
    return x - y;
}

/*
    В последней задаче вы узнали об экспорте по умолчанию и его использовании.
Чтобы импортировать экспорт по умолчанию, нужно использовать другой синтаксис импорта.
В следующем примере add - это экспорт по умолчанию файла math_functions.js.
Вот как его импортировать:

import add from "./math_functions.js";

   Синтаксис отличается в одном ключевом месте. Импортируемое значение, add, не окружено фигурными скобками ({}).
add здесь - это просто имя переменной для того, что экспортируется по умолчанию из файла math_functions.js.
Вы можете использовать любое имя при импорте значения по умолчанию.
*/
// Пример:
import subtract from './math_functions.js';
subtract(7,4);
