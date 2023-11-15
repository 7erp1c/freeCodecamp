function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    }
    {
        return "No, that was false";
    }
}

// Setup
function testStrict(val) {
    if (val === 7) { //оператор строгого равенства, а оператор == может сравнивать и число и строку
        // по значению 3 == "3" true; != неравен и преобразует типы данных, !== строго не равен
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <=50 && val>=25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);
//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val <10||val>20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);