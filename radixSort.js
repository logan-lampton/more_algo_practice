// doesn't make direct comparisions between numbers
// works on lists of numbers
// exploits the fact that the size of a number is encoded in the number of digits

// function getDigit gets the digit at the index; index of 0 is the number in the "ones" place (the smallest digit)
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// helper function to count the number of digits
//Math.abs() makes it so a negative number would work too
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//helper function that returns the number of digits in the largest number in an array of numbers
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums
}