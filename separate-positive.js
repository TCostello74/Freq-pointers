// add whatever parameters you deem necessary
function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;

    //will work its way in swapping positives with negatives and movig them left or right respectively, using a temp variable
    while (start < end) {
        if (nums[start] < 0 && nums[end] > 0) {

          var temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;

          start += 1;
          end -= 1;
        } else {
            if (nums[start] > 0) start += 1;
            else end -= 1;
        }
    }
    return nums;

}
