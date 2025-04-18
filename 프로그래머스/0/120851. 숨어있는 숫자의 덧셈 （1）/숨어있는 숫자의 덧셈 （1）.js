function solution(my_string) {
    var answer = 0;
    let newArr = [...my_string].filter(item =>!isNaN(item)).map((item)=> Number(item))
    newArr.forEach((item)=>{
        answer = answer + item
    })
    return answer;
}