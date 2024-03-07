function solution(s) {
    var answer = s.split(" ").map((words,i)=>{
    return words.split("").map((word,j)=>{
        if(j%2 == 0){
        return  word.toUpperCase()
        }
        else{
            return word.toLowerCase()
        }
    }).join("")
    }).join(" ")
    
    
    
    return answer;
}