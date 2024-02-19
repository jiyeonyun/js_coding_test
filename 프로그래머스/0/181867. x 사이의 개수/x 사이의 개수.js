function solution(myString) {
    var answer = [];
    answer = myString.split("x").map(item=>{
    return item.length
    })
    return answer;
}