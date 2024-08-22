/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length < 2) return nums;
    for (let i = 0; i < nums.length - 1; i++){
        let minValue = i;
        for (let j = i +1; j < nums.length; j++){
            if (nums[j] < nums[minValue]){
                minValue = j;
            }
        }

        // swaping 
        if (nums[minValue] != nums[i]){
            let temp = nums[i];
            nums[i] = nums[minValue];
            nums[minValue] = temp;
        }

    }
    return nums;
};