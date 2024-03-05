function solution(x) {
    var answer = true;
    const str = String(x);
    let sum = 0
    const newArr = Array.from(str).map((item)=>{return Number(item)});
    newArr.forEach((item)=>{
        sum= sum+item
    })
    x%sum== 0 ?answer = true :answer = false
    return answer;
}