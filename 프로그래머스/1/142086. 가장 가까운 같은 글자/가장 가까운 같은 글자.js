function solution(s) {
    var answer = []
    let stringArr = [...s]
    stringArr.forEach((item,i)=>{
       if(stringArr.slice(0,i).includes(item) == false){
            answer.push(-1)
       }else{
           if(stringArr.slice(0,i).filter(string=> string == item).length == 1 ){
               return answer.push(i -stringArr.slice(0,i).indexOf(item))
           }else{
                return answer.push(i -stringArr.slice(0,i).lastIndexOf(item))
           }
         
    };
    })
    return answer;
}
