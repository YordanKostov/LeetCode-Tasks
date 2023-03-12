/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
    let maxPrefixLen = Math.min(...strs.map(str => str.length));
    let prefix = '';
   for(let index = 0; index < maxPrefixLen; index++){
        let char = strs[0][index];
        if (strs.every(str => str[index] === char)){
            prefix += char;
        } else{
            break;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));