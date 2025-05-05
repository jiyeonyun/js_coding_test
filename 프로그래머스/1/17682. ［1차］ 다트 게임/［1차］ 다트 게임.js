function solution(dartResult) {
  var answer = 0;
    let scores = [];
    let tempScore = "";

    [...dartResult].forEach((item)=>{
        if(!isNaN(item)){
            tempScore += item
        }
        else if (item === 'S' || item === 'D' || item === 'T') {
            let score = parseInt(tempScore);
            if (item === 'S') {
                score = Math.pow(score, 1);
            } else if (item === 'D') {
                score = Math.pow(score, 2);
            } else if (item === 'T') {
                score = Math.pow(score, 3);
            }
            scores.push(score);
            tempScore = ""; 
        }
        else{
            if(item == "*"){
               scores[scores.length-1] =  scores[scores.length-1]*2
               scores[scores.length-2] =  scores[scores.length-2]*2
                
            }else{
               scores[scores.length-1] =  scores[scores.length-1]*-1
                
            }
        }
    
    })
    
   scores.forEach((item)=>{
       if(!isNaN(item)){
           answer = answer + item
       }
   })
    return answer;
}