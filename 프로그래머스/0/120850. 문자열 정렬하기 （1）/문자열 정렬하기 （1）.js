function solution(my_string) {
  
  let newArr = [...my_string].filter(item => !isNaN(item)).map((item)=>{
return Number(item)})
                                                                
newArr.sort(function(a, b)  {
  return a - b;
});
    return newArr;
}