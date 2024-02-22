function solution(num_list) {

    var answer =      num_list.sort(function(a, b)  {
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
}).slice(0,5)
   
    return answer;
}