function solution(my_strings, parts) {
    var answer = [];
      my_strings.map((item,i)=>{
        const first =parts[i][0]
        const second = parts[i][1]
        answer.push(item.slice(first,second+1))
       
    })

    return answer.join("");
}