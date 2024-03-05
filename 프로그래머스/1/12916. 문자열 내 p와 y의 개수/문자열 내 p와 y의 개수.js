function solution(s){
    var answer = true;
    let newString = s.toUpperCase();
    newString.match(/P/g)?.length == newString.match(/Y/g)?.length ? answer = true : answer = false
    return answer;
}