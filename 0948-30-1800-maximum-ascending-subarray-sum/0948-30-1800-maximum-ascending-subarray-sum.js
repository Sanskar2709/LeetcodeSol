/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {

    let currsum = nums[0];
    let max = currsum;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            currsum+=nums[i];

        }
        else{
            currsum = nums[i];
        }
        max = Math.max(max, currsum);
    }

    return max;
    
};