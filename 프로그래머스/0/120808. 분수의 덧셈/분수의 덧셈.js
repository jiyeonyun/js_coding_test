function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    const lcmValue = lcm(denom1, denom2);

    function convertNumer(numer, denom) {
        return numer * (lcmValue / denom);
    }

    const sumNumer = convertNumer(numer1, denom1) + convertNumer(numer2, denom2);
    const commonGcd = gcd(sumNumer, lcmValue);

    return [sumNumer / commonGcd, lcmValue / commonGcd];
}
