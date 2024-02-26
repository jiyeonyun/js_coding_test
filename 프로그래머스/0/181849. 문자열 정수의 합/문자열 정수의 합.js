function solution(num_str) {
    var answer = 0;
const answerArr = [...num_str].map(item=>{
return Number(item)})
 answer = answerArr.reduce((prev, cur)=>{
  return prev + cur;
	}, 0)
    return answer;
}