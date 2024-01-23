function solution(my_string, overwrite_string, s) {
    var answer = '';
  
    let overLength = overwrite_string.length
    let firstString = my_string.slice(0,s)
    let lastString = my_string.substring(s+overLength)
   
    answer = firstString+overwrite_string+lastString
    return answer;
}