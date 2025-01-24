/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let c=0;
    let total = 0;
    let sub = {0:1};
    for(let i of nums){
        total+=i;
        if(sub[total-k]!== undefined){
            c+=sub[total-k];
        }
        sub[total] = (sub[total] || 0) + 1;
    }
    return c;
    
}