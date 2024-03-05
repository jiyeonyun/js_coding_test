function solution(a, b) {
    var answer = 0;
    a.forEach((item,i)=>{
        answer = answer +item*b[i]
    })
    return answer;
}