function solution(a, b) {
    var answer = 0;
    let first =a
    let last =b
    if(a>b){
        first = b
        last = a
    }
   
    let numArr = []
    for(let i = first; i<=last; i++){
        numArr.push(i)
    }
    numArr.forEach((item)=>{
    answer = answer+item
    })
    return answer;
}