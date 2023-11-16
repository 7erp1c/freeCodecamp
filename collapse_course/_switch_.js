//🥰🥰🥰 Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);
//😀😀😀 Adding a Default Option in Switch Statements
function switchOfStuff(val2) {
    let answer2 = "";
    switch(val2){
        case "a":
            answer2 = "apple";
            break;
        case "b":
            answer2 = "bird";
            break;
        case "c":
            answer2 = "cat";
            break;
        default:
            answer2 = "stuff";
            break;
    }
    return answer2;
}
switchOfStuff(1);
//😁😁😁 Multiple Identical Options in Switch Statements
function sequentialSizes(val3) {
    let answer3 = "";
    switch(val3){
        case 1:
        case 2:
        case 3:
            answer3 = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer3 = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer3 = "High";
            break;
    }
    return answer3;
}
sequentialSizes(1);
//🤣🤣🤣Replacing If Else Chains with Switch
function chainToSwitch(val4) {
    let answer4 = "";
    switch(val4){
        case "bob":
            answer4 = "Marley";
            break;
        case 42:
            answer4 = "The Answer";
            break;
        case 1:
            answer4 = "There is no #1";
            break;
        case 99:
            answer4 = "Missed me by this much!";
            break;
        case 7:
            answer4 = "Ate Nine";
            break;
    }
    return answer4;
}
chainToSwitch(7);