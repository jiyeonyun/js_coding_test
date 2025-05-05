function solution(quiz) {
    return quiz.map((q) => {
        const [left, right] = q.split(" = ");
        const [x, op, y] = left.split(" ");
        const result = Number(right);
        
        let calc = 0;
        if (op === "+") {
            calc = Number(x) + Number(y);
        } else if (op === "-") {
            calc = Number(x) - Number(y);
        }

        return calc === result ? "O" : "X";
    });
}
