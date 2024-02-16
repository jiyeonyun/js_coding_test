function solution(todo_list, finished) {
    var answer = [];
    let notfinishedArr =[]
    
    finished.forEach((item,i)=>{
    return item == false && notfinishedArr.push(i)})                                
    notfinishedArr.forEach((item,i)=>{
        return answer.push(todo_list[item])
    })
    return answer;
}