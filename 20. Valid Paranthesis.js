/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let openPar = ['(', '[', '{'];
    let closePar = [')', ']', '}'];
    let parant = s.split('');
    let stack = [...parant];

    for(let el of parant){
        if(openPar.includes(el)){
            if(parant.includes(closePar[openPar.indexOf(el)])){
                stack.splice(stack.indexOf(el), 1);
                stack.splice(stack.indexOf(closePar[openPar.indexOf(el)]), 1);
            } else{
                return false;
            }
        }
    }

    if(stack.length === 0){
        return true;
    } else{
        return false;
    }
};


console.log(isValid("([)]"));