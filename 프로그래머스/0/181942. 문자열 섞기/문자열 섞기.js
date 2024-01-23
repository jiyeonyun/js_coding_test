function solution(str1, str2) {
    var answer = '';
    let answerArr = []
    
    for(let i = 0; i<str1.length; i++){
        answerArr.push(`${str1[i]+str2[i]}`)
    }
    answer = answerArr.join("")
    return answer;
}