// Implement next permutation, which rearranges numbers into the lexicographically next
// greater permutation of numbers.
// If such an arrangement is not possible, it must rearrange it as the lowest possible order
// (i.e., sorted in ascending order).
// The replacement must be in place and use only constant extra memory




const nextPermutation = nums => {
    if (nums.length <= 1) return;

    let leftHandSwap;

    for (let i = nums.length - 2; i >= 0; i--) {

        if (nums[i] < nums[i + 1]) {
            leftHandSwap = i;
            break;
        }
    }

    for (let i = nums.length - 1; i > leftHandSwap; i--) {

        if (nums[i] > nums[leftHandSwap]) {

            [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

            let chopped = nums.splice(leftHandSwap + 1);
            chopped.sort((a, b) => a - b);
            nums.push(...chopped);
            return;
        }
    }

    nums.sort((a, b) => a - b);
};

let nums = [1,2,3]
nextPermutation(nums);
console.log(`The next lexicographic permutation is: ${nums}`);

let nums1 = [1,1,3,4]
nextPermutation(nums1);
console.log(`The next lexicographic permutation is: ${nums1}`);