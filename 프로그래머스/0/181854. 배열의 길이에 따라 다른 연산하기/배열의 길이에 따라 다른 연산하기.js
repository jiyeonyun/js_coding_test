function solution(arr, n) {
    var answer = arr.map((item,i)=>{
        if(arr.length % 2 == 1 && i %2 == 0){
            return item + n
        }
        else if(arr.length % 2 == 0 && i %2 == 1){
            return item+n
        }
        else{
            return item
        }
    })
    return answer;
}