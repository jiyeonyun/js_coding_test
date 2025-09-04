function solution(s) {
    var answer = [...s].map((item,i)=>{
        if(i == 0){
            return item.toUpperCase()
        }else if([...s][i-1] == " "){
            return item.toUpperCase()
        }else{
            return item.toLowerCase()
        }
}).join("")
    return answer;
}