// add whatever parameters you deem necessary & write docstring

// input: sorted array of numbers and a target average
// output: boolean, T if average can be calculated with pair of nums in array
function averagePair(nums, targetAvg) {
    // define high and low pointers
    // while loop, as long as pointers haven't passed one another
    //      check average of current pointees
    //      if avg equals target return true
    //      if avg is greater than target, decrement our high pointer
    //      if avg is less than target, increment our low pointer
    // return false

    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const currAvg = (nums[low] + nums[high]) / 2;

        if (currAvg === targetAvg) {
            return true;
        } else if (currAvg > targetAvg) {
            high--;
        } else if (currAvg < targetAvg) {
            low++;
        }
    }

    return false;
}

averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false