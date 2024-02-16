function solution(myString, pat) {
    var answer = 0;
    myString.toUpperCase().includes(pat.toUpperCase()) ? answer =1:answer =0
    return answer;
}