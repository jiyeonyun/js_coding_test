function solution(n) {
    var answer = 0;
    let answerArr = []
    for(let i= 4; i<=n; i++){
        if(i%3 == 0){
             answerArr.push(i)
        }
        else if(i>5&&i%5 ==0){
            answerArr.push(i)
        }
        else if(i>7 && i%7 ==0){
            answerArr.push(i)
        }
        else if(i%2 == 0){
              answerArr.push(i)
        }
    }
    console.log(answerArr)
        answer = answerArr.length
    return answer;
}