function solution(n) {
    let result = 1;
    let m = 1;

    while (result * (m + 1) <= n) {
        m++;
        result *= m;
    }

    return m;
}
