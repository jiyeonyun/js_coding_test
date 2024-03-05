function solution(n) {
    var answer = '';
    for(let i = 1; i<=n; i++){
        if(i%2 ==0){
            answer = answer+'박'
        }
        else{
        answer = answer+'수'
            }
    }
    return answer;
}