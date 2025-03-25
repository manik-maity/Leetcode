function majorityElement(nums: number[]): number[] {
    const hashMap = new Map();
    const numOfAppear = nums.length / 3;
    const result : number[] = [];
    for (let i = 0; i < nums.length; i++){
        if (hashMap.has(nums[i])){
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
        }
        else {
            hashMap.set(nums[i], 1);
        }
    }

    hashMap.forEach((val, key) => {
        if (val > numOfAppear){
            result.push(key);
        }
    });

    return result;
};