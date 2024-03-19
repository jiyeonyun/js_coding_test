function solution(N, stages) {
    var answer = new Array(N).fill(0);
    for(let i = 1; i<=N; i++){
        let user = 0 
        let dojun = 0
        stages.forEach((item)=>{
            if(item==i){
                dojun++
            }
            if (item>=i){
                user++
            }
            
            
        })
        answer[i-1] = {score:dojun/user,stage:i}
    }
   answer =  answer.sort((a,b)=>{
       if(a.score < b.score) return 1;
      if(a.score > b.score) return -1;
      if(a.score === b.score) return 0;
    }).map((item)=>{
        return item.stage
    })
    return answer;
}