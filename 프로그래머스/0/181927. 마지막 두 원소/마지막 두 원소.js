function solution(num_list) {
    var answer = [...num_list];
    let lastNum =  num_list[num_list.length-1]
    let prevNum =  num_list[num_list.length-2]
    lastNum>prevNum?answer.push(lastNum-prevNum):answer.push(2*lastNum)
    return answer;
}