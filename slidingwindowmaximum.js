//Objective is to find the maximum of each sliding window of size k in a 1D array

let nums = [1,3,-1,-3,5,3,6,7], k = 3


//O(n) solution where we have two pointers from the left and right and 
//update the maxes from both sides

let left = []
let right = []

//Update maximums from left
left[0] = nums[0]
for (let i = 1; i < nums.length; i++) {

    //If this is true, we have reached the end of that window, so 
    //make sure to reset the value
    if (i % k == 0) {
        left[i] = nums[i]
    } else {
        left[i] = Math.max(left[i - 1], nums[i])
    }
}

//Update maximums from right
right[nums.length - 1] = nums[nums.length - 1]
for (let i = 1; i < nums.length; i++) {
    //Start at 2nd to last element
    let j = nums.length - 1 - i

    //Same thing as before, this marks the end of that window
    if ((j + 1) % k == 0) {
        right[j] = nums[j]
    } else {
        right[j] = Math.max(right[j + 1], nums[j])
    }
}

let result = []
for (let i = 0; i < nums.length - k + 1; i++) {
    result[i] = Math.max(left[i + k - 1], right[i])
}

return result