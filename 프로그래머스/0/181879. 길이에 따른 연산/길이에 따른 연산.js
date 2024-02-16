function solution(num_list) {
    var answer = 0;
    if(num_list.length>=11){
        num_list.forEach(item=>{
            answer +=item
        })
    }
    else{
           let firstNum = 1
        
       num_list.forEach(item=>{
            firstNum *=item
           
        })
        answer = firstNum
    }
    return answer;
}