function solution(citations) {
    let answer = 0;
    let i = 0;  
    let n = citations.length;

    while (i <= n) {   // i는 0부터 n까지 가능
        let cnt = 0;   // i 이상 인용된 논문 수

        citations.forEach((item) => {
            if (item >= i) {   // i 이상이면 카운트
                cnt++;
            }
        });

        if (cnt >= i) {   // 조건 만족 → 후보 갱신
            answer = i;
        }
        i++;  // 다음 H 값으로
    }

    return answer;
}
