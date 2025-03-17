function rearrangeArray(nums: number[]): number[] {
    let prositiveArr : number[] = [], negativeArr : number[] = [];
    for (let i = 0; i < nums.length; i++){
      if (nums[i] < 0){
        negativeArr.push(nums[i]);
      }
      else {
        prositiveArr.push(nums[i]);
      }
    }

    let i = 0;
    let j = 0;
    while(j < nums.length - 1){
      nums[j] = prositiveArr[i]
      nums[j + 1] = negativeArr[i]
      i++;
      j+=2;
    }
   
    return nums;
};