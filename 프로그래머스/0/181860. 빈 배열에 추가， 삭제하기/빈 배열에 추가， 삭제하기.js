function solution(arr, flag) {
    var answer = [];
    arr.map((item,i)=>{
    if(flag[i]){
        for(i=0;i<item*2;i++){
            answer.push(item)
        }
    }
        else{
         answer = answer.slice(0,-item)
    }
    })
    return answer;
}