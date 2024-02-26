function solution(myString) {
    var answer = [...myString].map(item=>{
       return  item.codePointAt()<108 ? "l" :item
    }).join("")
    return answer;
}
