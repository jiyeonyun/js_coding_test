function solution(n) {
    var answer = [];
    const str = String(n);

    const newArr = Array.from(str).map((item)=>{return  Number(item)})
    
    answer = newArr.reverse()
    return answer;
}