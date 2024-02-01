function solution(x1, x2, x3, x4) {
    var answer = true;
    let first = true;
    let second = true;
   
    x1==false && x2 == false ? first = false: first= true
    x3==false && x4 ==false?second = false:second=true
    
    second==true && first == true ? answer = true: answer =false
    
    return answer;
  
}