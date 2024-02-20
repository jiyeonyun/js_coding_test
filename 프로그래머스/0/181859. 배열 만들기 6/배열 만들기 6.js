function solution(arr) {
    var answer = [];
     arr.map((item,i)=>{
        if(answer.length == 0){
            answer.push(item)
        }else{
            if(answer[answer.length-1] ==item){
                 answer.pop();
            }
            else{
                answer.push(item)
            }
        }
     })
    return answer.length == 0 ? [-1]:answer;
}