function solution(array) {
    var answer = 0;
    array.forEach((item)=>{
        [...item.toString()].forEach((n)=>{
        if(n ==7){
            answer = answer +1 
        }
        })
    })
    return answer;
}