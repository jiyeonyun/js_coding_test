function solution(binomial) {
    var answer = 0;
    let binomialArr = binomial.split(" ");
    
    const num1 = parseFloat(binomialArr[0]);
    const op = binomialArr[1];
    const num2 = parseFloat(binomialArr[2]);

    switch (op) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
    }
    
    return answer;
}