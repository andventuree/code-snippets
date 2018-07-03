// Shifted Array Search
// A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

// Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
//                                                  # outcome of shifting
//                                                  # [2, 4, 5, 9, 12, 17]
//                                                  # three times to the left

// output: 3 # since it’s the index of 2 in arr
// Constraints:

// [time limit] 5000ms
// [input] array.integer arr
// [input] integer num
// [output] integer

// time: O(log((N))
// space: O(1)

function shiftedArrSearch(shiftArr, num) {
  //1) use binary search to find pivotIdx
  let pivotIdx = findPivotPoint(shiftArr);
  if (pivotIdx == 0 || num < shiftArr[0]) {
    //if num is smaller than last item, start from back
    return binarySearch(shiftArr, pivotIdx, shiftArr.length - 1, num);
  }
  //2) use binary search to find numIdx
  return binarySearch(shiftArr, 0, pivotIdx - 1, num);
}

function findPivotPoint(arr) {
  let begin = 0;
  let end = arr.length - 1;
  while (begin <= end) {
    let mid = begin + Math.floor((end - begin) / 2); //find midpoint
    if (mid == 0 || arr[mid] < arr[mid - 1]) {
      return mid;
    }
    //since we didnt find it, shrink the arr by 1 then reloop
    if (arr[mid] > arr[0]) begin = mid + 1;
    else end = mid - 1;
  }

  return 0; //turns out it wasn't shfited at all
}

function binarySearch(arr, begin, end, num) {
  while (begin <= end) {
    let mid = begin + Math.floor((end - begin) / 2);
    if (arr[mid] < num) begin = mid + 1;
    else if (arr[mid] == num) return mid;
    else end = mid - 1;
  }
  return -1;
}

console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 17)); //2

/* *************************************************************** */
// //anything sorted can use binary search, even nums!
// //pramp provided solution
// //time: O(log n) | space: O(1)
// function root(x, n) {
//   if (x == 0) return 0; //edge case

//   let lowerBound = 0;
//   let upperBound = Math.max(1, x);
//   let approxRoot = (upperBound + lowerBound) / 2;

//   while (approxRoot - lowerBound >= 0.001) {
//     if (Math.pow(approxRoot, n) > x) {
//       upperBound = approxRoot;
//     } else if (Math.pow(approxRoot, n) < x) {
//       lowerBound = approxRoot;
//     } else {
//       break;
//     }
//     approxRoot = (upperBound + lowerBound) / 2;
//   }
//   return approxRoot;
// }

// function root(x, n) {
//   if (x === 0) return 0;
// }

function truncFloat(x, points) {
  let power = Math.pow(10, points);
  return parseInt("" + x * power) / power;
}

// function root(x, n) {
//   if (x === 0) return 0; //edge case
//   if (n === 1) return x; //edge case
//   let begin = 0;
//   let end = x;
//   while (begin <= end) {
//     //binary search
//     let mid = (begin + end) / 2;
//     let y = Math.pow(mid, n); //assume Math.pow = O(1);
//     let diff = Math.abs(x - y); //difference from target
//     console.log("diff: ", diff);

//     if (diff < 0.001) return truncFloat(mid, 3);

//     if (y < x) begin = mid + 0.001;
//     else end = mid - 0.001;
//   }

//   return truncFloat(begin, 3);
// }

// console.log(root(9, 2));

function root(x, n) {
  //goal is to find a number that we'll use n times to equal x with <0.0001 accuracy
  let begin = 0;
  let end = x;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    let y = Math.pow(mid, n);
    let diff = Math.abs(x - y);
    console.log("diff: ", diff);

    if (diff < 0.001) return mid;
    else if (x > y) begin = mid + 0.001;
    else if (x < y) end = mid - 0.001;
  }
}

var search = function(nums, target) {
  let pivotPoint = pivot(nums);
  console.log("pivotPoint: ", pivotPoint);
  if (target < nums[0]) {
    return bSearch(nums, pivotPoint, nums.length - 1, target);
  }
  return bSearch(nums, 0, pivotPoint - 1, target);
};

function pivot(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid - 1]) return mid;

    if (nums[mid] > nums[0]) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}

function bSearch(nums, left, right, target) {
  while (left <= right) {
    let mid = left + Math.floor((left - right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) left = mid + 1;
    else right = mid + 1;
  }
  return -1;
}

// search([4, 5, 6, 7, 0, 1, 2], 0);

//https://leetcode.com/explore/learn/card/binary-search/136/template-analysis/935/
// Template 1: basic
// Initial Condition: left = 0, right = length-1
// Termination: left > right
// Searching Left: right = mid-1 <- exclude current node is next search
// Searching Right: left = mid+1 <- exclude current node is next search

// Template 2: advanced - check right
// Initial Condition: left = 0, right = length
// Termination: left == right
// Searching Left: right = mid
// Searching Right: left = mid+1 <- exclude current node is next search

// Template 3: check left + right;
// Initial Condition: left = 0, right = length-1
// Termination: left + 1 == right
// Searching Left: right = mid
// Searching Right: left = mid
