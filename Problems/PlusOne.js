const dig = [1, 2, 3];

var plusOne = function (digits) {
  var arr = [];
  digits = String(digits + 1);
  for (let i = 0; i < digits.length; i++) {
    const element = Number(digits[i]);
    arr.push(element);
  }

  return arr;
};

console.log(plusOne(4321));
