function solution(n) {
    var answer = 0;
    function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
    answer = lcm(n,6)/6
    return answer;
}