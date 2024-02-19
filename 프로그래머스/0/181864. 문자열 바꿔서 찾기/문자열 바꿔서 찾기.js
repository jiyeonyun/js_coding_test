function solution(myString, pat) {
    var answer = 0;
    let changedString = [...myString].map(item=>{
       return  item === "A"? "B":"A"
    }).join("")
    
  console.log(changedString)
    changedString.includes(pat)? answer = 1: answer = 0
    return answer;
}