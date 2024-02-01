function solution(my_string, index_list) {
    var answer = "";
    let answerArr = []
    
   index_list.map((item)=>{
    answerArr.push(my_string[item])
    })
    answer = answerArr.join("")
    return answer;
}