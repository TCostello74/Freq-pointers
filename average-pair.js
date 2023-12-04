// add whatever parameters you deem necessary
function averagePair(arr, num) {
    let start = 0; // left
    let end = arr.length - 1; //right

    while (start < end) {
        // variable for calculating the average
        let avg = (arr[start] + arr[end]) /2;
        // will close in on middle point by incrementing to each end
        if (avg === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--;
        }
    }
    
    return false;

}
