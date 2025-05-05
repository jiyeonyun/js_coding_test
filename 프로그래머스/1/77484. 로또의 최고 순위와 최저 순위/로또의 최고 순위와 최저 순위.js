function solution(lottos, win_nums) {
    var answer = [];
    let lank =  [6, 6, 5, 4, 3, 2, 1]; // 인덱스로 순위 구할 수 있도록 미리 조정
    let count  = 0 ;
    let zeroCount = 0;

    lottos.forEach(item => {
        if (item === 0) {
            zeroCount++;
        } else if (win_nums.includes(item)) {
            count++;
        }
    });

    let best = lank[zeroCount + count];
    let worst = lank[count];
    answer = [best, worst];

    return answer;
}
