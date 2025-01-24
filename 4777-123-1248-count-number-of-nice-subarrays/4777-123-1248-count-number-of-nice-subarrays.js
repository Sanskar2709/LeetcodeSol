/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let sub={0:1};
    let c=0,odd=0;
    for(let i of nums){
        if(i%2===1){
            odd++;
        }

        if(sub[odd-k]!==undefined){
            c+=sub[odd-k];
        }

        sub[odd] = (sub[odd] || 0) + 1;
    }
    return c;
};