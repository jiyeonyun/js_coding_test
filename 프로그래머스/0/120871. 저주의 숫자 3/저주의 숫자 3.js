function solution(n) {
    let answer = 0;
    let count = 0;

    while (count < n) {
        answer++; // 숫자 1씩 늘리면서 체크
        if (answer % 3 === 0 || answer.toString().includes("3")) {
            continue; // 이건 저주 숫자니까 count 안 늘림
        }
        count++; // 정상 숫자일 때만 count 1 증가
    }

    return answer;
}
