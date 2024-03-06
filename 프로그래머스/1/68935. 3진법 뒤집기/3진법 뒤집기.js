function solution(n) {
    let answer = 0;
    let three = [];
    while (n !== 0) {
        three.push(n % 3);
        n = Math.floor(n / 3); 
    }
     let changeNum = 1;
    let ten = three.reverse().map((item, i) => {
        let temp = Number(item) * changeNum; 
        changeNum *= 3;
        return temp;
    });

 ten.forEach((item)=> answer =answer+item
        )
    return answer;
}