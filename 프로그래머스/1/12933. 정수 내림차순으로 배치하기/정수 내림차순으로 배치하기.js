function solution(n) {
    var answer = 0;
    const str = String(n);
    const newArr = Array.from(str).map((item)=>{return Number(item)})
    newArr.sort(function (a, b) {
        return b - a;
    });
    answer = Number(newArr.join(""))
    return answer;
}