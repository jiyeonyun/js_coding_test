function solution(s) {
    var answer = [...s].sort((a,b)=>a>b?-1:1).join("");
    return answer;
}