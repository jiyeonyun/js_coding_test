function solution(board) {
    var answer = board.length * board.length;
    let bomb = []
    // 8방향 (상하좌우 + 대각선) 좌표 변환
const dx = [-1, -1, -1,  0, 0, 1, 1, 1];
const dy = [-1,  0,  1, -1, 1,-1, 0, 1];

    board.forEach((item,i)=>{
        item.forEach((stem,n)=>{
            stem == 1 && bomb.push([i,n])
        })
    })
    bomb.forEach(([x, y]) => {
    for (let d = 0; d < 8; d++) {
        let nx = x + dx[d];
        let ny = y + dy[d];
      if (nx >= 0 && ny >= 0 && nx < board.length && ny < board.length) {
        board[nx][ny] = 1
        }
    }
  
});
     board.forEach((item,i)=>{
        item.forEach((stem,n)=>{
            stem == 1 && answer-- 
        })
    })
     
    return answer;
}
