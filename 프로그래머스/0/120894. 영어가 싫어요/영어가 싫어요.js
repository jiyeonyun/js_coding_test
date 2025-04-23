function solution(numbers) {
    let answer = numbers;
    let str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    str.forEach((item, i) => {
        answer = answer.replaceAll(item, i);
    });

    return Number(answer);
}