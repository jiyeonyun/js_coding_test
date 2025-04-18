function solution(my_string) {
    var answer = '';
   let arr = new Set([...my_string])
   answer = Array.from(arr).join("")
    return answer;
}