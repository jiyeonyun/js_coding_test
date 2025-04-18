function solution(cipher, code) {
    var answer = 0
    let newArr = [...cipher].filter((item,i) => {
     return (i+1) % code == 0
    })
answer = newArr.join("")
    return answer;
}