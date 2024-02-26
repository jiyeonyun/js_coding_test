function solution(rank, attendance) {
    var answer = 0;
    let answerArr =[]
    let rankPosition = rank.map((item,i)=>{
        return  rank.indexOf(i+1)
    })
  
    rankPosition.forEach((item,i)=>{
        if(attendance[item]&&answerArr.length <3){
          answerArr.push(item)
        }
    })
    
    answerArr.forEach((item,i)=>{
        switch(i+1){
            case 1 : 
            answer = answer + 10000*item
            break;
            case 2 : 
                answer =answer + 100*item
            break;
            case 3: 
                answer = answer + item
        }
    })
    console.log(answerArr)
    return answer;
}