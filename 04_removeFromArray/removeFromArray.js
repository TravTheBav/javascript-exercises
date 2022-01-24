const removeFromArray = function(arr, ...args) {
    args.forEach((arg) => {
        for (i=0; i < arr.length; i++) {
            if (arr[i] === arg) {
                arr.splice(i, 1);
            }
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
