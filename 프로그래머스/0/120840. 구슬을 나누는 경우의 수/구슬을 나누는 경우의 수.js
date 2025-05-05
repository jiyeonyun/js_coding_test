function solution(balls, share) {
  const factorial = (n) => {
    let result = 1n; // BigInt 시작!
    for (let i = 2n; i <= BigInt(n); i++) {
      result *= i;
    }
    return result;
  };

  const answer =
    factorial(balls) /
    (factorial(balls - share) * factorial(share));

  return Number(answer); // BigInt를 다시 숫자로 바꿔서 반환
}
