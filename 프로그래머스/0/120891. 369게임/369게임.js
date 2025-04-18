function solution(order) {
    var answer = 0;
    let orderString = order.toString();
    
    [...orderString].forEach((item) => {
        if (item === '3' || item === '6' || item === '9') {
            answer += 1;
        }
    });

    return answer;
}
