/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    let c=0, sum=0;
let v = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i = 0; i<word.length;i++){
        if(v.has(word[i])){
            c+=1+i;
        }
        sum+=c;
    }
    return sum;
};