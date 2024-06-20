/**
 * @param {string} s
 * @return {number}
 */
const s = "aliz"
var lengthOfLongestSubstring = function (s) {
  let charIndexMap = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
      if (charIndexMap[s[right]] !== undefined) {
          left = Math.max(left, charIndexMap[s[right]] + 1);
      }
      charIndexMap[s[right]] = right;
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring(s));
