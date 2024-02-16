function solution(num_list) {
    var answer = 0;
    let evenArr = num_list.filter((item,i)=>{
return i%2 == 0})
    let oddArr =  num_list.filter((item,i)=>{
return i%2 == 1})
    

const evenSum = evenArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

const oddSum = oddArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

evenSum>oddSum ? answer = evenSum : answer = oddSum
    return answer;
}