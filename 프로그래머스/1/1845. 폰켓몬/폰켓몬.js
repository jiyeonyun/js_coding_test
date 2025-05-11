function solution(nums) {
    const numSet = new Set(nums); 
    const max = nums.length / 2;

    return Math.min(numSet.size, max);
}
