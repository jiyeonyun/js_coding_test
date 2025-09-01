function solution(ingredient) {
    let stack = [];
    let answer = 0;

    for (let i of ingredient) {
        stack.push(i);

        if (stack.length >= 4) {
            // 뒤에서 4개 확인
            if (
                stack[stack.length - 4] === 1 &&
                stack[stack.length - 3] === 2 &&
                stack[stack.length - 2] === 3 &&
                stack[stack.length - 1] === 1
            ) {
                // 햄버거 완성 → 제거
                stack.splice(stack.length - 4, 4);
                answer++;
            }
        }
    }

    return answer;
}
