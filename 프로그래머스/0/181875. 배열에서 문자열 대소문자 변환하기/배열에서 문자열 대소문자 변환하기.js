function solution(strArr) {
    var answer = strArr.map((item,i)=>{
        if(i%2==0){
            return item.toLowerCase();
        }
        else{
            return item.toUpperCase();
        }
    });
    return answer;
}