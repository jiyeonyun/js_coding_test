function solution(s) {
    let stack = [];
    
    for (let item of s) {
        if (stack.length === 0 || stack[stack.length - 1] !== item) {
            stack.push(item);
        } else {
            stack.pop();
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}
