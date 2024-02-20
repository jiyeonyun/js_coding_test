function solution(arr, k) {
    var answer = [];
    arr.map((item) => {
        if (!answer.includes(item) && answer.length < k) {
            answer.push(item);
        }
    });

    while (answer.length < k) {
        answer.push(-1);
    }
   
    return answer;
}