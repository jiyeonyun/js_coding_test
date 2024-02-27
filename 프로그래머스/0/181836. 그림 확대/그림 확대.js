function solution(picture, k) {
    var answer = [];
    picture.forEach((item) => {
        for (let i = 0; i < k; i++) {
            let newRow = "";
            [...item].forEach((word) => {
                for (let j = 0; j < k; j++) {
                    newRow += word;
                }
            });
            answer.push(newRow);
        }
    });
    return answer;
}