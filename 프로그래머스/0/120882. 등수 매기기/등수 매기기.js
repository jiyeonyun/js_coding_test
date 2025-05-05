function solution(score) {
  const avgScore = score.map(item => 
    (item[0] + item[1]) / 2
  );

  // 중복 허용 순위 배열
  const sorted = [...avgScore].sort((a, b) => b - a);

  const answer = avgScore.map(score => 
    sorted.indexOf(score) + 1
  );

  return answer;
}