function solution(a, b) {
    var answer = 0;
    let oddA = a%2
    let oddB = b%2
    
    switch(oddA+oddB){
        case 2 :
           answer =  a**2 +b**2
            break;
        case 1 :
            answer = 2*(a+b)
            break;
        case 0 :
            answer = Math.abs(a-b)
            
    }
    
    return answer;
}