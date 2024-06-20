/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const num = String(x);
  var newNum = "";
  for (let i = num.length - 1; i >= 0; i--) {
    newNum += num[i];
  }
  let revarse = Number(newNum);
  if (revarse === x) {
    return true;
  }else{
    return false;
  }
};

console.log(isPalindrome(121));
