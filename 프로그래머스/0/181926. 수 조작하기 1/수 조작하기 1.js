function solution(n, control) {
    
    var answer = n;
    
    for (let char of control) {
        switch(char){
            case "w":
             answer =answer +1
                 break;
            case  "s":
                  answer = answer -1
                 break;
            case "d":
                  answer = answer +10
                 break;
            case "a":
                 answer = answer - 10
                 break;
        }
}
    return answer;
}