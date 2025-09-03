function solution(s){
    var answer = true;
    let sArr =[...s]
    let stack = []

   sArr.forEach((item)=>{
      item == "(" ? stack.push(item): stack.length>0?stack.pop():stack.push(item)
    })

    stack.length == 0 ?answer = true : answer = false
    return answer;
}