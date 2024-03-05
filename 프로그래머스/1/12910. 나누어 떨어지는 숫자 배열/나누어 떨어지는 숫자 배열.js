function solution(arr, divisor) {
    var answer = []
        
     const newArr  = arr.map((item)=>{
        if(item%divisor == 0 ){
            return item
        }
    }).filter((element) => element !== undefined).sort((a,b)=>a-b);

    return newArr.length== 0 ? [-1]: newArr;
}