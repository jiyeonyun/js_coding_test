function solution(my_string) {
    var answer = 0;
    const newArr = my_string.split(/[^0-9]+/);
   newArr.forEach((item)=>{
if(item!==""){
    answer = answer+Number(item)
}})
    return answer;
}