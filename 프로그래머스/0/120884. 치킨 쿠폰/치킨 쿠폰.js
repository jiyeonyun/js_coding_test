function solution(chicken) {
    let answer = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        let service = Math.floor(coupon / 10); // 서비스 치킨
        answer += service;                     // 받은 치킨 수 누적
        coupon = service + (coupon % 10);      // 남은 쿠폰 + 새로 받은 쿠폰
    }

    return answer;
}
