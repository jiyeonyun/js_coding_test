function solution(box, n) {
    var answer = 1;
    let newArr = box.map((item)=>{
        return Math.floor(item/n)
    })
    console.log(newArr)
     newArr.forEach((item)=>{
           answer =  answer*item
    })
    return answer;
}