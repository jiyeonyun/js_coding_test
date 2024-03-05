function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((item,i)=>{
        signs[i] == true ? answer = answer+item : answer =answer -item
})
    return answer;
}