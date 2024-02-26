function solution(str_list, ex) {
    var answer =  str_list.map((item)=>{
        return item.includes(ex) ?"":item
    }).join("")
    
   
    return answer;
}