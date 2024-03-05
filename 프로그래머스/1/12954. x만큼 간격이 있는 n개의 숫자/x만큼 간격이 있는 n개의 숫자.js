function solution(x, n) {
    var answer = [];
    const newArr = Array(n).fill(x)
    answer = newArr.map((item,i)=>{
        return item = item*(i+1)
    })
    return answer;
}