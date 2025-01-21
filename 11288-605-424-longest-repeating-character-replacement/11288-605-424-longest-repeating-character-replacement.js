/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0,r=0;
    let max=0;
    let dict= {};
    for(r=0;r<s.length;r++){
        dict[s[r]]=dict[s[r]]+1 || 1;
        max = Math.max(max, dict[s[r]]);
        if(r-l+1-max>k){
            dict[s[l]]--;
            l++;
            
        }

    }
    return r-l;

    
};