const test = [5, 5, 4, 6, 4];



// brute forse to find how many time occur // O(n) for each num to find
function getNumberCount(num, arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num){
            count++;
        }
    }
    return count;
}

console.log(getNumberCount(5, test));