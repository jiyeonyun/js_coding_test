function solution(myString, pat) {
    var answer = '';
    let lastNum = myString.lastIndexOf(pat)+pat.length
    answer = myString.slice(0,lastNum)
    return answer;
}