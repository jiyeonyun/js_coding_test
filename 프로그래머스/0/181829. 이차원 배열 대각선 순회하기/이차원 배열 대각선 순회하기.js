function solution(board, k) {
    var answer = 0;

   board.forEach((first,i)=>{
        first.forEach((second,j)=>{
            if(i+j<=k){
                 answer = answer+=second
            }
        })
   })
    
    return answer;
}