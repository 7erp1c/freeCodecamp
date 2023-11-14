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
        // по значению 3 == "3" true
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);