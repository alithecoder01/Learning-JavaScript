
const strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    // Start with the first word as the prefix
    let prefix = strs[0];

    // Compare the prefix with each word in the list
    for (let i = 1; i < strs.length; i++) {
        let word = strs[i];

        // Adjust the prefix length to match the current word
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(strs))




