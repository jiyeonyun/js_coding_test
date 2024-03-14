function solution(nums) {
    var answer = 0;
    let newArr = [...new Set(nums)];
    let canNum = nums.length/2
    newArr.length<canNum ? answer = newArr.length : answer = canNum
    return answer;
}