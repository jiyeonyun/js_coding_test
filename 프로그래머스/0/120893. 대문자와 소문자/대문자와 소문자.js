function solution(my_string) {
    var answer = [...my_string].map((item)=>{
        return item == item.toUpperCase()? item.toLowerCase(): item.toUpperCase()
    }).join("")
    return answer;
}