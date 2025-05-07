function solution(d, budget) {
    let answer = 0;
    let total = budget;
    const sortArr = d.sort((a, b) => a - b);

    while (answer < sortArr.length && total >= sortArr[answer]) {
        total -= sortArr[answer];
        answer++;
    }

    return answer;
}
