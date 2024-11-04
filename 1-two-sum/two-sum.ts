function twoSum(nums: number[], target: number): number[] {
    const n : number = nums.length;
    for (let i : number = 0; i < n - 1; i++){
        for (let j : number = i + 1; j < n; j++ ){
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};