/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const filteredArr = nums.filter(num => num !== 0);
    for (let i = 0; i < nums.length; i++){
      if (filteredArr[i]){
        nums[i] = filteredArr[i];
      }
      else {
        nums[i] = 0;
      }
    }
    
};