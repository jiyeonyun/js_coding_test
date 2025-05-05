function solution(sides) {
    var answer = 0;
    let sideMax = Math.max(...sides)
    let sidesMin = Math.min(...sides)
    
    let i = sideMax
 
    while(i+sidesMin>sideMax){
        answer = answer + 1
        i--
    }
    
    let n = sideMax+1
    
    while(sidesMin+sideMax>n){
        answer = answer+1
        n++
    }
    
    
    return answer;
}