function solution(arr, queries) {
    let answer = []
    
   for(let i =0 ;i<queries.length; i++){
       let s = queries[i][0]
       let e = queries[i][1]
       let k = queries[i][2]
    
        let filteredArr = arr.slice(s, e + 1).filter((num) => num > k);
        filteredArr.length!==0 ? answer.push(Math.min(...filteredArr)): answer.push(-1)
     
   }
 
    return answer;
}