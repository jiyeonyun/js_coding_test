function solution(my_string, alp) {
    var answer = [...my_string].map((item)=>{
        if(item === alp){
            return item.toUpperCase();
        }else{
            return item
        }
    }).join("")
    return answer;
}