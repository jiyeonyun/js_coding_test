function solution(A, B) {
    let arr = [...A];

    for (let i = 0; i < A.length; i++) {
        if (arr.join('') === B) {
            return i; // 이때가 최소 횟수!
        }
        arr.unshift(arr.pop()); // 맨 끝 문자 앞으로 이동 (오른쪽으로 한 칸 밀기)
    }

    return -1; // 끝까지 돌았는데도 안 되면 -1
}
