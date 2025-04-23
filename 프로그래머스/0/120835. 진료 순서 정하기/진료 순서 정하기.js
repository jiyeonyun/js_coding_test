function solution(emergency) {
    // 응급도를 내림차순 정렬하고, 등수 매기기
    let emergencyList = emergency
        .slice()
        .sort((a, b) => b - a)
        .map((value, index) => ({ value, rank: index + 1 }));

    // 원래 순서대로 등수만 뽑기
    let answer = emergency.map(item => {
        return emergencyList.find(el => el.value === item).rank;
    });

    return answer;
}
