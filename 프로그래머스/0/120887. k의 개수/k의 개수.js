function solution(i, j, k) {
    let answer = 0;
    for (let n = i; n <= j; n++) {
        // 숫자 n을 문자열로 변환한 후, k를 포함하는지 확인
        const count = (n.toString().match(new RegExp(k, 'g')) || []).length;
        answer += count;
    }
    return answer;
}
