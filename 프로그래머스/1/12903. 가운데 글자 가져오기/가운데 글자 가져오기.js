function solution(s) {
    var answer = '';
    let center =  Math.floor(s.length/2);
    
    return s.length % 2 === 0 ? s.slice(center - 1, center + 1) : s.slice(center, center + 1);
}