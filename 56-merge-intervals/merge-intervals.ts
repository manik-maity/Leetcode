function merge(intervals: number[][]): number[][] {
    // Step 1: Sort intervals based on start value
    intervals.sort((a, b) => a[0] - b[0]);  

    // Step 2: Initialize result list
    const merged: number[][] = [];

    // Step 3: Merge intervals
    for (let i = 0; i < intervals.length; i++) {
        // If merged is empty OR no overlap, add a new interval
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
        } 
        // Else, merge the current interval into the last interval in merged list
        else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    return merged;
}
