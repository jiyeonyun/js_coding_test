function solution(myString) {
    var answer = [...myString].map(item=>{
        if(item === "a"||item ==="A"){
            return item.toUpperCase();
        }
        else{
            return item.toLowerCase();
        }
    }).join("")
    return answer;
}