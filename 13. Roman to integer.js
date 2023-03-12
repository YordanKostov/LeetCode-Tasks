/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    let arr = s.split('');
    let sum = 0;
    let numerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IX': 9,
      'IV': 4,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
    };

    for(let index = 0; index < arr.length; index++){
       if(numerals.hasOwnProperty(arr[index] + arr[index+1])){
            sum += numerals[arr[index] + arr[index+1]];
            index++;
       } else{
        sum += numerals[arr[index]];
       }
    }
    return sum;
};

console.log(romanToInt("MMMXLV"));