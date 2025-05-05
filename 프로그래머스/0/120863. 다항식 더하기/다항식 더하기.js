function solution(polynomial) {
    var answer = '';
    let num = 0;
    let x = 0;
    const newArr = polynomial.split(" + "); // 공백 포함해서 split해야 정확함

    newArr.forEach((item) => {
        if (item.includes("x")) {
            let coefficient = item.replace("x", "");
            x += coefficient === "" ? 1 : Number(coefficient);
        } else {
            num += Number(item);
        }
    });

    if (x !== 0 && num !== 0) {
        answer = `${x === 1 ? "" : x}x + ${num}`;
    } else if (x !== 0) {
        answer = `${x === 1 ? "" : x}x`;
    } else {
        answer = `${num}`;
    }

    return answer;
}
