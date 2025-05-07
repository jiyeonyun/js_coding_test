function solution(s) {
    var answer = 0;
    let newS = s
    const numArr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    numArr.forEach((item,i)=>{
        if(s.indexOf(item) !== -1){
            newS = newS.replaceAll(item,i)
        }
    })
    answer = Number(newS)
    return answer;
}