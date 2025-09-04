function solution(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let answer = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;  // 가장 가벼운 사람 태움
        }
        right--;     // 가장 무거운 사람은 무조건 태움
        answer++;    // 보트 한 척 추가
    }
    return answer;
}
