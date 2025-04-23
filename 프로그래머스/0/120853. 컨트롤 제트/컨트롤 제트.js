function solution(s) {
    var answer = 0;

    s.split(" ").forEach((item,i)=>{
        if(item == "Z"){
           isNaN(Number(s.split(" ")[i-1]))?answer = answer- 0: answer = answer - Number(s.split(" ")[i-1])
        }else{
            answer = answer + Number(item)
        }
    })
    return answer;
}