function solution(left, right) {
    var answer = 0;
    let answerArr = []
    for(let i = left; i<=right; i++){
        let arr = []
        for(let j =1 ; j<=i; j++){
            i%j == 0 && arr.push(j)
        }
      
        if(arr.length % 2 == 0){
            answerArr.push(i)
        }
        else{
        answerArr.push(-i)
        }
        
    }
    console.log(answerArr)
    answerArr.forEach((item)=> answer = answer +item)
    return answer
    
}