function solution(l, r) {
    var answer = [];
    
    for(let i = l; i<=r;i++){
    let numArr = i.toString().split('')
    let isOnlyFiveOrZero = numArr.every((item) => item === '5' || item === '0');

        if (isOnlyFiveOrZero) {
            answer.push(i);
        }
    }
    if(answer.length == 0){
        answer.push(-1)
        }
    return answer;
}