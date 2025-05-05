function solution(a, b) {
    // 최대공약수 구하기
    const getGCD = (num1, num2) => {
        while (num2 !== 0) {
            [num1, num2] = [num2, num1 % num2];
        }
        return num1;
    };

    // 기약분수 만들기
    let denominator = b / getGCD(a, b);

    // 분모에서 2와 5 제거
    while (denominator % 2 === 0) denominator /= 2;
    while (denominator % 5 === 0) denominator /= 5;

    // 남은 게 1이면 유한소수
    return denominator === 1 ? 1 : 2;
}
