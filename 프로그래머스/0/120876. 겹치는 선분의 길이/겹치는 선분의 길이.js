function solution(lines) {
  const count = Array(200).fill(0);

  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      count[i + 100]++;
    }
  });

  return count.filter(v => v >= 2).length;
}
