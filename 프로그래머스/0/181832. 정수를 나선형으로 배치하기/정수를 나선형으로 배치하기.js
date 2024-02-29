function solution(n) {
    const answer = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        // 오른쪽 방향
        for (let i = colStart; i <= colEnd; i++) {
            answer[rowStart][i] = num++;
        }
        rowStart++;

        // 아래쪽 방향
        for (let i = rowStart; i <= rowEnd; i++) {
            answer[i][colEnd] = num++;
        }
        colEnd--;

        // 왼쪽 방향
        for (let i = colEnd; i >= colStart; i--) {
            answer[rowEnd][i] = num++;
        }
        rowEnd--;

        // 위쪽 방향
        for (let i = rowEnd; i >= rowStart; i--) {
            answer[i][colStart] = num++;
        }
        colStart++;
    }

    console.log(answer);

    return answer;
}