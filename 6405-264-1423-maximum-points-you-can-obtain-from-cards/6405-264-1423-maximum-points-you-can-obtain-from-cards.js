/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let s=0,s1=0;

    // for(let i=0;i<k;i++){
    //     s+=cardPoints[i];
    // }
    // for(let i=cardPoints.length-1;i>cardPoints.length-1-k;i--){
    //     s1+=cardPoints[i];
    // }

    // return Math.max(s,s1);

    let l=k-1;
    let r=cardPoints.length-1;
    for(let i=0;i<k;i++){
        s+=cardPoints[i];

    }
    let max=s;
    for(let i=0;i<k;i++){
        s+=cardPoints[r--]-cardPoints[l--];
        max=Math.max(s,max);;
    }

    return max;

    
};