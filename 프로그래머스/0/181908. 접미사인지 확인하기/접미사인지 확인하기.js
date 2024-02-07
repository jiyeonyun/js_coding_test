function solution(my_string, is_suffix) {
    var answer = 0;
    let strArr = []
      for(let i = 0; i<my_string.length; i++){
    my_string.slice(i,my_string.length) !== undefined && strArr.push(my_string.slice(i,my_string.length))
    }  
   strArr.includes(is_suffix) ? answer =1  : answer = 0

    return answer;
}