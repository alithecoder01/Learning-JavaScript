const s = ["H", "a", "n", "n", "a", "h"];

var reverseString = function (s) {
  var arr = [];
  s.forEach((element) => {
    arr.push(element);
    var last = arr.pop();
    arr.unshift(last);
  });
  return arr;
};

console.log(reverseString(s));
