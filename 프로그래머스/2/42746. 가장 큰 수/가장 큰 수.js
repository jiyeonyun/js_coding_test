function solution(numbers) {
    let newArr = numbers
        .map((item) => item.toString())
        .sort((a, b) => (b + a) > (a + b) ? 1 : -1);

    
    let answer = newArr.join('');

    return answer[0] === '0' ? '0' : answer;
}
