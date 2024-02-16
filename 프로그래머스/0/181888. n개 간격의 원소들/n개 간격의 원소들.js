function solution(num_list, n) {
    var answer = num_list.filter((item,i)=>{
    return i%n == 0
    })
    return answer;
}