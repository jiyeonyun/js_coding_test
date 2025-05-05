function solution(s) {
    var answer = '';
    const newArr = s.split(" ").map((item)=>{return Number(item)})
    console.log(newArr)
    answer = `${Math.min(...newArr)} ${Math.max(...newArr)}`
    return answer;
}