const s = "pwwkew";
var lengthOfLongestSubstring = function (s) {
  // Check the length constraint
  if (s.length < 0 || s.length > 5 * 10 ** 4) {
    throw new Error("The length of the string is out of bounds.");
  }

  // Check the character constraints
  const validCharacters = new Set(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  );
  for (let char of s) {
    if (!validCharacters.has(char)) {
      throw new Error(`Invalid character found in the string: ${char}`);
    }
  }

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
