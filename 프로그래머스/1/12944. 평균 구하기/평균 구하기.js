function solution(arr) {
    var answer = 0;
   arr.forEach((item)=>{
        return answer = answer + item
    })
    answer =  answer / arr.length
    return answer;
}