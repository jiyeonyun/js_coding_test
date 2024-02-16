function solution(arr, queries) {
    var answer = [...arr];

    queries.forEach((item) => {
        for (let i = item[0]; i <= item[1]; i++) {
            answer[i] += 1;
        }
    });

    return answer;
}
