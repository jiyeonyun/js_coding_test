function solution(s) {
    var answer = '';
    let newArr = [...s]
    let deleteArr =[]
    newArr.forEach((item)=>{
     
       if(newArr.filter((fitem)=>fitem == item).length  == 1){
           return deleteArr.push(item)
       }
   })
     
    return deleteArr.sort().join("");
}