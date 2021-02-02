const nums = [1,-2,3,45,-8,4,-5,4,6];
for (let i=0;i<nums.length;i++){
    if(nums[i]>6){
        break;
    }
    // console.log(nums[i]);

}
for (let i=0;i<nums.length;i++){
    if(nums[i]<0){
        continue;
    }
     console.log(nums[i]);

}