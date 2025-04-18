function solution(num_list, n) {
    var answer = [];
    num_list.forEach((item,i)=>{
    i%n==0 && answer.push(num_list.slice(i,i+n))
    })
    return answer;
}