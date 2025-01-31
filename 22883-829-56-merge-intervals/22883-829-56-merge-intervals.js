/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let res=[];
    intervals.sort((a,b)=> a[0] - b[0]);
    let prev = intervals[0];

    for(let i=1;i<intervals.length;i++){
        let curr = intervals[i];
        if(curr[0]<= prev[1]){
            prev[1] = Math.max(prev[1] , curr[1]);
        }
        else{
            res.push(prev);
            prev = curr;
        }

    }
    res.push(prev);
    return res;
};