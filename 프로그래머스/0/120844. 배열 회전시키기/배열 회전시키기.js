function solution(numbers, direction) {
    if (direction === "right") {
        let last = numbers.pop();        // 마지막 꺼 꺼내고
        numbers.unshift(last);           // 맨 앞에 붙이기
    } else {
        let first = numbers.shift();     // 첫 번째 꺼 꺼내고
        numbers.push(first);             // 맨 뒤에 붙이기
    }
    return numbers;
}