function solution(strArr) {
    var answer = [];
    strArr.forEach(item=>{
        item.includes("ad") ==false && answer.push(item)
    })
    return answer;
}