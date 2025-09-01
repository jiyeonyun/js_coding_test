function solution(babbling) {
    let can = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach((word) => {
        let temp = word;
        let valid = true;

        // 같은 단어가 두 번 연속으로 있는 경우 걸러내기
        for (let c of can) {
            if (temp.includes(c + c)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            // 발음 가능한 단어들을 공백으로 치환
            can.forEach((cItem) => {
                temp = temp.split(cItem).join(" ");
            });

            // 다 지워지고 공백만 남으면 OK
            if (temp.trim() === "") {
                answer++;
            }
        }
    });

    return answer;
}

