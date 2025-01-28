/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
    pairs.sort((a,b)=> a[1]-b[1]);
    let prev = pairs[0];
    let res=1;
    for(let i=1; i<pairs.length;i++){
        let curr = pairs[i];
        if(curr[0] > prev[1]){
            res++;
            prev=curr;
        }
    }
            return res;

};