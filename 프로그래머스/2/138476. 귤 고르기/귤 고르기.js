function solution(k, tangerine) {
    var answer = 0;
    let tangerineSet = {};  
    tangerine.forEach((item)=>{
        tangerineSet[item] = (tangerineSet[item] || 0) + 1;
    })
    
    let counts = Object.values(tangerineSet).sort((a,b)=> b - a);

  let sum = 0;
  for (let c of counts) {
    sum += c;
    answer++;
    if (sum >= k) break;
  }

    return answer;
}