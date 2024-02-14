function solution(start, end_num) {
    var answer = [];
    for(let i =start; i>=end_num; i-=1){
        answer.push(i)
    }
    return answer;
}