function solution(arr) {
    let num = 0; 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0; 
            }
        }
    }
    return 1; // 모든 조건을 만족하면 1을 반환
}
