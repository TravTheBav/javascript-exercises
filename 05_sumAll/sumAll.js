const sumAll = function(num_1, num_2) {
    if (num_1 < 0 || num_2 < 0) {
        return "ERROR";
    }   else if (typeof(num_1) != "number" || typeof(num_2) != "number") {
        return "ERROR";
    }
    sum = 0;
    if (num_1 <= num_2) {
        for (i = num_1; i <= num_2; i++) {
            sum += i;
        }
    }   else {
        for (i = num_2; i <= num_1; i++) {
            sum += i;
        }
    }    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
