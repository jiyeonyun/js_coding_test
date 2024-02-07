function solution(my_string, is_suffix) {
    var answer = 0;
    let strArr = []
      for(let i = 1; i<my_string.length; i++){
    strArr.push(my_string.slice(0,i))
    }  
   strArr.includes(is_suffix) ? answer =1  : answer = 0

    return answer;
}