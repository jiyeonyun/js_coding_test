function solution(a, b, n) {
    var answer = 0;

        while(n>=a){
            console.log("n:"+n)
            console.log(Math.floor(n/a))
            answer = answer + Math.floor(n/a)*b
            n = (Math.floor(n/a) * b) + n%a;         
           
        }
    return answer;
}
