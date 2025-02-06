/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {

    let prodcount = new Map();
    let res=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let prod = nums[i]* nums[j];
            prodcount.set(prod,(prodcount.get(prod) || 0) + 1);

        }
    }

    for(let i of prodcount.values()){
        if(i>1){
            res+=((i*(i-1))/2)*8;
        }
    }
    return res;
    
};