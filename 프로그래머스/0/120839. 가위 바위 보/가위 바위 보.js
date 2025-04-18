function solution(rsp) {
    var answer = '';
    let isWin = {0:5,2:0,5:2}
    
    answer = [...rsp].map((item)=>{
        return isWin[item]
    }).join("")
    return answer;
}