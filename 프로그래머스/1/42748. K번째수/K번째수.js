function solution(array, commands) {
    var answer = [];
    commands.forEach((item)=>{
        let num =  array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1];
        answer.push(num);
    });
    return answer;
}
