function solution(price) {
    let answer = 0;

    if (price >= 500000) {
        answer = Math.floor(price * 0.80);  // 20% 할인
    } else if (price >= 300000) {
        answer = Math.floor(price * 0.90);  // 10% 할인
    } else if (price >= 100000) {
        answer = Math.floor(price * 0.95);  // 5% 할인
    } else {
        answer = price;  // 100,000원 미만은 할인 없음
    }

    return answer;
}
