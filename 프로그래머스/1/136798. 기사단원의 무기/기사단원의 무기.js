function solution(number, limit, power) {
    var answer = 0;
    let numArr = []
function getDivisorCount (num){
    let result = []
    let index = 1;
    while (index <= num / 2) {
      if (num % index === 0) result.push(index)
      index++
    }
    result = [...result, num] 
    return result.length
}
    for(let i = 1; i<=number; i++){
       numArr.push(getDivisorCount(i))
    }

    numArr.forEach((item)=>{
    if(item>limit){
        answer= answer+power
    }
        else{
            answer=answer+item
        }
    })
    return answer;
}