function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map((item)=>{
        Number(item.slice(s,s+l))>k?answer.push(Number(item.slice(s,l+s))):""
    })
    
    return answer;
}