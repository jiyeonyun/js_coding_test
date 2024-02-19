function solution(myString) {
    var answer = [];
  answer = myString.split("x").map(item=>{
    return item.replace("x","")
    }).sort().filter(item => item!=="");

    return answer;
}