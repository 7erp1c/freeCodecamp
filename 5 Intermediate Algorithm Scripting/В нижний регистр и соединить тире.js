function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    console.log(str);
    return str
        .toLowerCase()
        .split(/[_ ]+/)
        .join("-");
}

// test here
console.log(spinalCase("Teletubbies say Eh-oh"));