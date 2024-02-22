function solution(strArr) {
    var answer = 0;
    let maxLength = 0
    const newArr =[]
    
    strArr.forEach((item)=>{
        if(maxLength<item.length){
            maxLength = item.length
        }
      
    })
    
    for(let i = 0 ; i<=maxLength ; i++){
        newArr.push(strArr.filter((item)=>{
            return item.length == i
        }))
        
    }
    newArr.map((item)=>{
         if(answer<item.length){
            answer = item.length
         }
    })
    return answer;
    
}
