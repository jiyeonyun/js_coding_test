function solution(number) {
    var answer = 0;
    const str = String(number);
    const newArr = Array.from(str);
    let result = 0
   for (let i = 0; i < newArr.length; i++) {
    result +=Number( newArr[i]);
}
    
    answer = result % 9
    return answer;
}