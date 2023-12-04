// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    // if string is empty return true
    if (!str1) return true;
    // iterate
    while (str2Idx < str2.length) {
        // check if first index of strings match. then move to the next one
        if (str2[str2Idx] === str1[str1Idx]) {
            str1Idx += 1;
        }
        // after all str1's have been checked
        if (str1Idx === str1.length) return true;
        str2Idx += 1;
    }
    return false;
}
