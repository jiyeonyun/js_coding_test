function solution(price, money, count) {
    var answer = -1;
    let total = 0
    for(let i = 1; i<=count; i++){
        total = total + i*price
    }
    
    return money-total>0?0:Math.abs(money-total);
}