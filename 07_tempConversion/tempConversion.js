const ftoc = function(temp) {
  temp = (temp - 32) * (5/9);
  return temp.toFixed(1) * 1.0;
};

const ctof = function(temp) {
  temp = temp * (9/5) + 32;
  return temp.toFixed(1) * 1.0;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
