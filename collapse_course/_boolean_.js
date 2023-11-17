//✨✨✨ Returning Boolean Values from Functions
function isLess(a, b) {
    return a<b;
}
isLess(10, 15);

//😀😀😀 Return Early Pattern for Functions
function abTest(a1, b1) {
    if (a1<0 || b1<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);