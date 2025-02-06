/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = new Map();
    let res=0;
    for(let i=0;i<nums.length;i++){
       if(nums[i] in map){
        res+=map[nums[i]];
       }

       map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    return res;
    
};