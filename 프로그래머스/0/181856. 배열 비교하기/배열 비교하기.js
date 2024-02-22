function solution(arr1, arr2) {
    var answer = 0;
    let leng1 = arr1.length
    let leng2 = arr2.length
    
    const sumFn = (arr) => {
        return arr.reduce((prev, cur) => {
            return prev + cur;
        }, 0);
    }
    
    if (leng1 !== leng2) {
        answer = leng1 > leng2 ? 1 : -1;
    } else {
        const result1 = sumFn(arr1);
        const result2 = sumFn(arr2);
        
        answer = result1 === result2 ? 0 : result1 > result2 ? 1 : -1;
    }
    
    return answer;
}
