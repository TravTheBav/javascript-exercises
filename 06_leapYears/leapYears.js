const leapYears = function(year) {
    if (divisible_by(4, year)) {
        if (divisible_by(100, year) && !divisible_by(400, year)) {
            return false;
        }   else {
            return true;
        }
    }   else {
        return false;
    }
};

function divisible_by(divisor, num) {
    if (num % divisor == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
