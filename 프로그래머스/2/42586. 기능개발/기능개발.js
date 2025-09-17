function solution(progresses, speeds) {
    let answer = [];
    let progrArr = progresses.map((item, i) => Math.ceil((100 - item) / speeds[i]));

    let cur = progrArr[0]; // 현재 배포 기준일
    let count = 1;

    for (let i = 1; i < progrArr.length; i++) {
        if (progrArr[i] <= cur) {
            // 현재 배포일 안에 끝나는 기능
            count++;
        } else {
            answer.push(count);
            count = 1;
            cur = progrArr[i]; // 새로운 배포 기준일
        }
    }
    answer.push(count); // 마지막 배포

    return answer;
}
