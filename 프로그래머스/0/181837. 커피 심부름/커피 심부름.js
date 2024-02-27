function solution(order) {
    var answer = 0;
    
   let orderArr =  order.map((item)=>{
        if(item.includes("ice")){
            return item
        }
        else if(item.includes("anything")){
            return 'iceamericano'
        }
        else{
            return `ice${item}`
        }
    })
    orderArr.forEach((item)=>{
       if( item.includes("americano")){
        answer = answer+4500
       }
        else{

        answer =answer+5000}
    })
    return answer;
}