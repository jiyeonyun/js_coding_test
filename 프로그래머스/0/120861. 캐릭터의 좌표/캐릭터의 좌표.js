function solution(keyinput, board) {
  let answer = [0, 0];
  let ga = (board[0] - 1) / 2;
  let se = (board[1] - 1) / 2;

  keyinput.forEach((item) => {
    switch (item) {
      case "up":
        if (answer[1] < se) answer[1]++;
        break;
      case "down":
        if (answer[1] > -se) answer[1]--;
        break;
      case "left":
        if (answer[0] > -ga) answer[0]--;
        break;
      case "right":
        if (answer[0] < ga) answer[0]++;
        break;
    }
  });

  return answer;
}
