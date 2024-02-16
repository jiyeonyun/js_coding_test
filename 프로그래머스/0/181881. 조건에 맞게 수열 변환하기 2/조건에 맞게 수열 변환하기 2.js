function solution(arr) {
    let answer = 0;
    let centerArr = [...arr];

    while (true) {
        let newArr = centerArr.map((item) => {
            if (item >= 50 && item % 2 === 0) {
                return item / 2;
            } else if (item < 50 && item % 2 === 1) {
                return item * 2 + 1;
            } else {
                return item;
            }
        });

       

        if (JSON.stringify(centerArr) === JSON.stringify(newArr)) {
            break;
        }
         answer++;
        centerArr = newArr;
    }

    return answer;
}