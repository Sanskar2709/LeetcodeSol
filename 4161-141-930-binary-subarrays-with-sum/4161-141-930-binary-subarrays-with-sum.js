/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {

    let sub = {0:1};
    let c=0, total = 0;
    for(let i of nums){
        total+=i;
        if(sub[total - goal]!==undefined){
            c+=sub[total-goal];
        }
        sub[total] = (sub[total] || 0) + 1;
    }
    return c;
};