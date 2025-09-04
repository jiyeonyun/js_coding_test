function solution(s) {
    let answer = [0, 0];
    let string2 = s;

    while (string2.length > 1) {
        // 0 개수 세기
        let zeroCount = [...string2].filter((item) => item === "0").length;
        answer[1] += zeroCount;

        // 0 제거
        string2 = [...string2].filter((item) => item === "1").join("");

        // 길이를 2진수로 변환
        string2 = string2.length.toString(2);

        // 변환 횟수 증가
        answer[0]++;
    }

    return answer;
}
