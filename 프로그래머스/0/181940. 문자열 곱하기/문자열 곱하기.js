function solution(my_string, k) {
    var answer = '';
    let answerArr =  []
    
    for(let i = 0; i<k; i++){
        answerArr.push(my_string)
    }
    answer = answerArr.join("")
    return answer;
}