function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq=="!"){
        if(ineq ===">"){
            n>m ? answer = 1 : answer = 0 
        }
        else{
           n<m ? answer = 1 : answer = 0 
        }
    }
    else{
         if(ineq ===">"){
            n>=m ? answer = 1 : answer = 0 
        }
        else{
           n<=m ? answer = 1 : answer = 0 
        }
    }
    
    return answer;
}