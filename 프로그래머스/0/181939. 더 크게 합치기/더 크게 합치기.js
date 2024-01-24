function solution(a, b) {
    var answer = 0;
    if(`${a}${b}`>`${b}${a}`){
        answer = Number(`${a}${b}`)
    }
    else{
        answer = Number(`${b}${a}`)

    }
    return answer;
}