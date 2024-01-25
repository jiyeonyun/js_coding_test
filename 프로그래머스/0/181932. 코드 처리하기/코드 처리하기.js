function solution(code) {
    var answer = '';
    let mode = 0
    let answerArr = []
    
    code.split('').forEach((item,i)=>{
        if(mode === 0){
        item !=="1"&& i%2==0 && (answerArr.push(item))
        item =="1" && (mode = 1)
        }
        else{
        item !== "1" && i%2 ===1&& (answerArr.push(item))
            item === "1" && (mode = 0)
        }
    })
    
    answer = answerArr.length===0 ? "EMPTY":answerArr.join("")
    return answer;
}