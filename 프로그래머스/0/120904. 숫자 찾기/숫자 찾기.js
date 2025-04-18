function solution(num, k) {
    var answer = 0
    let numString = num.toString()

    answer = [...numString].indexOf(k.toString())
    return answer!== -1? answer+1 : answer;
}