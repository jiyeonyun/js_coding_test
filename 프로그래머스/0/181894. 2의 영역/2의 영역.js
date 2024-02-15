function solution(arr) {
    var answer = [];
    let indexOf2 = [];
arr.forEach((item, i) => {
    if (item === 2) {
        indexOf2.push(i); 
    }
});
   answer = indexOf2.length !==0 ?  arr.slice(indexOf2[0],indexOf2[indexOf2.length - 1] + 1):[-1]
    
    return answer;
}