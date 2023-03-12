/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    if(x == x.toString().split('').reverse().join('')){
        return true;
    }
    return false;
};

console.log(isPalindrome(121));