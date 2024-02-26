function solution(n_str) {
    var answer = '';
    let answerArr = [...n_str];
    
    while (answerArr[0] === "0") {
        answerArr.shift(); 
    }
    
    return answerArr.join(""); 
}