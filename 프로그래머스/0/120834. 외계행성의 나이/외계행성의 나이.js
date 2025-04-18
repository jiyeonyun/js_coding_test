function solution(age) {
    var answer = '';
    
    let newArr = [...(age.toString())].map((item)=>{
    return String.fromCharCode(Number(item)+97)})
   
    return newArr.join("");
}