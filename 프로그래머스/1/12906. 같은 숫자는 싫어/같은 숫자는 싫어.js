function solution(arr) {
    let answer = [];
    arr.forEach((item, idx) => {
        if (item !== arr[idx - 1]) {
            answer.push(item);
        }
    });
    return answer;
}