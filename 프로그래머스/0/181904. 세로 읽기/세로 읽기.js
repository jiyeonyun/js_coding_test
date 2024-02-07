function solution(my_string, m, c) {
    var answer = [];
    let origin = [...my_string]
    let arr = []
    
    for(let i = 0 ;i<my_string.length;i += m){
    arr.push(origin.slice(i,i+m))
    }
    console.log(arr)
    arr.map((item)=>{
    answer.push(item[c-1])
    })
    return answer.join("");
}
