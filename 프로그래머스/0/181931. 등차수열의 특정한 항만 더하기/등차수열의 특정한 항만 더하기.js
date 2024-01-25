function solution(a, d, included) {
    var answer = 0;
    const numArr= [a]
    
    for(let i = 0 ; i<included.length;i++){
        numArr.push(numArr[i]+d)
    }
    const newArr = included.forEach((item,i)=>{
        item && (answer+=numArr[i])
    })
    return answer;
}