function solution(binomial) {
    var answer = 0;
    let op = "";
    for (let i = 0; i < binomial.length; i++) {
        const item = binomial[i];
        isNaN(item) && (op = item);
    }
    let binomialArr = binomial.split(op);

    const num1 = parseFloat(binomialArr[0]);
    const num2 = parseFloat(binomialArr[1]);

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