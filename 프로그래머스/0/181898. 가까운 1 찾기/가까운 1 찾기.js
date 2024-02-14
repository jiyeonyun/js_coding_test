function solution(arr, idx) {
    var answer = 0;
    arr.slice(idx).indexOf(1) !== -1 ? answer = idx+arr.slice(idx).indexOf(1) : answer = -1
    return answer;
}

