function solution(numlist, n) {
    var answer = [];
    const newList = numlist.map((item,i)=>{
        return  {abs:Math.abs(item - n),origin:item}
    }).sort((a,b)=>{
        if(a.abs == b.abs){
            return b.origin - a.origin
        }else{
            return a.abs -b.abs
        }
    })
   answer = newList.map((item)=>{
        return item.origin
    })
    return answer;
}