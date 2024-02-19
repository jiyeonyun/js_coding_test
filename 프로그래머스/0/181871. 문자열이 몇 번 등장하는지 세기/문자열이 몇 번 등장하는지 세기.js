function solution(myString, pat) {
    var answer = [];
    let idx = myString.indexOf(pat)
    
    while(idx !== -1){
        answer.push(idx)
        idx = myString.indexOf(pat,idx+1)
    }
    
    return answer.length;
}