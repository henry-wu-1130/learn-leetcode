// binary search 3 第三種型態
// 需要用到兩次二分搜尋
function searchRange(nums: number[], target: number): number[] {
  if (!nums.length) return [-1, -1];
  if (nums.length === 1 && nums[0] === target) return [0, 0];

  let left = 0,
    right = nums.length - 1,
    result = [];

  if (nums.length === 2 && nums[left] === target) {
    result.push(left);
  }

  if (nums.length === 2 && nums[right] === target) {
    result.push(right);
  }

  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        result.push(mid);
      }
      left = mid;
    } else {
      right = mid;
    }
  }

  left = 0;
  right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        result.push(mid);
      }
      right = mid;
    } else {
      left = mid;
    }
  }

  if (!result.length) return [-1, -1];
  result = result.sort((a, b) => a - b);

  return [result[0], result[result.length - 1]];
}

//console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([1], 1));

// m:3 l:0 r:6
// m:4 l:3 r:6
// m:5 l:4 r:6
// m:5 l:5 r:6

// m:3 l:0 r:6
// m:1 l:0 r:3
//
