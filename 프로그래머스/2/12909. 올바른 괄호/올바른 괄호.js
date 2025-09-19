function solution(s) {
    let stack = [];
    for (let st of s) {
        if (st === "(") {
            stack.push(st);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
  
    return stack.length === 0;
}
