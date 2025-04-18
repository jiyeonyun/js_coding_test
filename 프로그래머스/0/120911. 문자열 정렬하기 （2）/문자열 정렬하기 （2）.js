function solution(my_string) {
    var answer = '';
    let newArr = [...my_string].map((item)=>item.toLowerCase()).sort()
    answer = newArr.join("")
    return answer;
}