var lengthOfLastWord = function (s) {
  var count = 0;
  // remove the spaces
  s = s.trim();
  // loop from the end, because we need the last word
  for (let i = s.length - 1; i >= 0; i--) {
    const element = s[i];
    // if thr value is not space count it in the counter
    if (element != " ") {
      count += 1;
    } else if (count > 0 && element == " ") {
      // if it's equal space and the counter is greate than 0, stop
      break;
    }
  }

  return count;
};
console.log(lengthOfLastWord("luffy is still joyboy"));
