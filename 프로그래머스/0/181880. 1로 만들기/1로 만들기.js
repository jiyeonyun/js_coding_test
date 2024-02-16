function solution(num_list) {
    let answer = 0;

    num_list.forEach(item => {
        let number = item;
        let count = 0;
        
        while (number !== 1) {
            if (number % 2 === 0) {
                number /= 2;
            } else {
                number = (number - 1) / 2;
            }
            count++;
        }
        
        answer += count;
    });

    return answer;
}
