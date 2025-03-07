const removeFromArray = function(array, elementToBeRemoved) {
    for (let i = 0; i < arguments.length; ++i) {
        for (let j = 0; j < array.length; ++j) {
            if (arguments[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
