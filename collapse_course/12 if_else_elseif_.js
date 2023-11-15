function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    }
    {
        return "No, that was false";
    }
}

// Setup
function testStrict(val1) {
    if (val1 === 7) { //оператор строгого равенства, а оператор == может сравнивать и число и строку
        // по значению 3 == "3" true; != неравен и преобразует типы данных, !== строго не равен
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
//😊😊😊
//Introducing Else Statements
function testElse(val2) {
    let result = "";
    if (val2 > 5 ) {
        result = "Bigger than 5";
    }
    else
        result = "5 or Smaller";
    return result;
}
testElse(4);
//👩👩
// Logical Order in If Else Statements
function orderMyLogic(val5) {
    if (val5 < 5) {
        return "Less than 5";
    } else if (val5 < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);
//😁😁😁
//Introducing Else If Statements
function testElseIf(val3) {
    if (val3 > 10) {
        return "Greater than 10";
    }
    else if (val3 < 5) {
        return "Smaller than 5";
    }
    else{
        return "Between 5 and 10";
    }}
testElseIf(7);
//😀😀😀
//Comparisons with the Logical And Operator
function testLogicalAnd(val4) {
    if (val4 <=50 && val4>=25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);
//🤐🤐🤐
//Comparisons with the Logical Or Operator
function testLogicalOr(val5) {
    if (val5 <10||val5>20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);