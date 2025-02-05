/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {

    let ind = [];
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            ind.push(i);
        }

    }
    if(ind.length === 0){
        return true;

    }
    if(ind.length>2){
        return false;
    }

    return (s1[ind[0]] === s2[ind[1]] && s1[ind[1]] === s2[ind[0]]);
    
};