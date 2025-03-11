const fibonacci = function(index) {
    index = +index;
    if(index < 0)
        return "OOPS";
    else if (index == 0)
        return 0;

    let fibonacci = [1, 1];
    for (let i = fibonacci.length - 1; i < index - 1; ++i) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    console.log(fibonacci);
    return fibonacci[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
