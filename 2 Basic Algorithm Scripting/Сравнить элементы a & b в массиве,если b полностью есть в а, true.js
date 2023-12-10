function mutation(arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();

    for (let i = 0; i < secondWord.length; i++) {
        let letters = secondWord[i];
        console.log(letters);
        if (firstWord.indexOf(letters) === -1) return false;
    }
    return true;
}

mutation(["hello", "hel"]); // will display false