let s = "()[]{}";

var isValid = function (s) {
  var stack = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        stack.length - 1 !== 0 ||
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};

console.log(isValid(s))
