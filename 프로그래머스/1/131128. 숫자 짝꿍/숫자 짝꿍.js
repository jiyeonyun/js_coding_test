function solution(X, Y) {
    let xArr = [...X];
    let yArr = [...Y];

    const resultX = {};
    const resultY = {};

    xArr.forEach((item) => {
        resultX[item] = (resultX[item] || 0) + 1;
    });

    yArr.forEach((item) => {
        resultY[item] = (resultY[item] || 0) + 1;
    });

    let common = [];

    for (let i = 0; i <= 9; i++) {
        const count = Math.min(resultX[i] || 0, resultY[i] || 0);
        if (count > 0) {
            common.push(String(i).repeat(count));
        }
    }

    if (common.length === 0) return "-1";

    let answer = common.join("").split("").sort((a, b) => b - a).join("");


    if (answer[0] === "0") return "0";

    return answer;
}
