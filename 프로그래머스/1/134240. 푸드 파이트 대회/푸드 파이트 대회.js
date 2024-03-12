function solution(food) {
    var answer = [];
    let first = []

    food.forEach((item,i)=>{
        if(i !== 0){
            
          for(let j = 0; j< Math.floor(item/2); j++){
                first.push(i)
                
            }
        }
    })
    answer = first.join("")+0+first.reverse().join("")
    return answer;
}