/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    let j=0, far=0, curr=0;
    for(let i=0;i<nums.length-1;i++){
        far = Math.max(far, i+nums[i]);

        if(i === curr){
            j++;
            curr = far;
        }
    }
    return j;
};