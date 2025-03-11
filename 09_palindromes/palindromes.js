const palindromes = function (string) {
    let array = [];
    for (let i = 0; i < string.length; ++i) {
        array.push(string.toUpperCase().charAt(i));                 // convert string to Uppercase then to char array
    }

    array = array.filter(isLetter);                                 // remove punctuation

    let reversed = []
    for (let i = 0; i < array.length; ++i) {                        // reverse char array
        reversed[i] = array[i + (array.length - (i * 2)) - 1];
    }

    for (let i = 0; i < array.length; ++i) {
        if (array[i] !== reversed[i])                              
            return false;
    }

    return true;
};

function isLetter(char) {
    return char !== "!" && char !== "?" && char !== "." && char !== " " && char !== ",";
}

// Do not edit below this line
module.exports = palindromes;
