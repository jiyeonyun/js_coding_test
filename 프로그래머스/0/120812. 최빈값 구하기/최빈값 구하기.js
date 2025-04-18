function solution(array) {
    let set = new Set(array);
    let obj = {};

    // 1. 카운팅
    set.forEach(value => {
        obj[value] = 0;
    });
    array.forEach(item => {
        obj[item] += 1;
    });

    // 2. 최대값 찾기
    let max = Math.max(...Object.values(obj));

    // 3. 최대값 가진 키(들) 뽑기
    let keys = Object.keys(obj).filter(key => obj[key] === max);

    // 4. 리턴 조건
    if (keys.length > 1) return -1;      // 여러 개면 -1
    else return Number(keys[0]);         // 하나면 숫자로 바꿔서 반환
}
