function solution(k, m, score) {
    var answer = 0;
    let sliceNum = score.length%m
    let sliceArr = score.sort().slice(sliceNum)
    console.log(sliceArr)

    for(let i = 0; i<sliceArr.length; i += m){
        answer = answer + sliceArr[i]*m
        
    }
   
    return answer;
}
