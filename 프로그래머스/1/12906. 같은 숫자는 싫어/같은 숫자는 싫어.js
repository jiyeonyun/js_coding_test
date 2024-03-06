function solution(arr)
{
    var answer = [];
   answer=  arr.map((item,i)=>{
       return  item == arr[i+1] ? undefined: item
    }).filter(item=>{ return item !== undefined})
    
    return answer;
}
