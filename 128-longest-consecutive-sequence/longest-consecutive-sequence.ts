function longestConsecutive(nums: number[]): number {
    if (nums.length == 0) return 0;
    const unique = new Set(nums);
    const sortedNums = [...unique].sort((a, b) => a- b);
    let maxCon = 1;
    let temp = 1;
    let i = 0;
    let j = 1;
    while(i < sortedNums.length && j < sortedNums.length){
        if (sortedNums[i] + 1 == sortedNums[j]){
            temp ++;
            maxCon = Math.max(temp, maxCon);
            i++;
            j++;
        }
        else {
            i = j;
            j = i+ 1;
            temp = 1;
        }
    }

    return maxCon;
};