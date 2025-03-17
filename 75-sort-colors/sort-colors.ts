/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors (nums : number[]) : void{
  if (nums.length < 2) return;
  const hashMap : {[nums : number] : number} = {
    0 : 0,
    1 : 0,
    2 : 0
  };
  for (let i = 0; i < nums.length; i++){
    if (nums[i] == 0){
      hashMap[0]++;
    }
    else if (nums[i] == 1){
      hashMap[1]++;
    }
    else {
      hashMap[2]++;
    }
  }

  for (let i = 0; i < nums.length; i++){
    if (hashMap[0] >= 1){
      nums[i] = 0;
      hashMap[0]--;
    }
    else if (hashMap[1] >= 1){
      nums[i] = 1;
      hashMap[1]--;
    }
    else {
      nums[i] = 2;
      hashMap[2]--;
    }
  }

}
