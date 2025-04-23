function solution(array, n) {
    const diffs = array.map(item => Math.abs(item - n));
    const minDiff = Math.min(...diffs);

    // minDiff랑 같은 차이를 가진 원소들 필터링
    const candidates = array.filter((item, index) => Math.abs(item - n) === minDiff);

    // 그 중에서 제일 작은 값 리턴
    return Math.min(...candidates);
}