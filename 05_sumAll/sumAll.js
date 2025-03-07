const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0)
        return "ERROR";
   
    if (typeof num1 != "number" && typeof num1 != "bigint" || typeof num2 != "number" && typeof num2 != "bigint")
        return "ERROR";

    if (num1 % 1 != 0 || num2 % 1 != 0) 
        return "ERROR";

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    let result = 0;
    for (let i = start; i <= end; ++i) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
