function solution(num_list) {
    var answer = 0;

    let temp = num_list.filter((item) => item < 0);
    temp.length>0 ? answer = num_list.indexOf(temp[0]) : answer = -1
    return answer;
}