function solution(dirs) {
  let answer = 0;
  let x = 0;
  let y = 0;
  const locationSet = new Set();

  const updateLocation = (x, y, dir) => {
    switch (dir) {
      case "U": return [x, y + 1];
      case "D": return [x, y - 1];
      case "R": return [x + 1, y];
      case "L": return [x - 1, y];
    }
  };

  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);

    // 범위를 벗어나면 스킵
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 경로 저장 (양방향 구분 X → "현재→다음" / "다음→현재" 둘 다 저장)
    const path1 = `${x},${y}-${nx},${ny}`;
    const path2 = `${nx},${ny}-${x},${y}`;
    locationSet.add(path1);
    locationSet.add(path2);

    // 실제 위치 갱신
    x = nx;
    y = ny;
  }

  // 길이 = 양방향 저장했으니 절반 나눔
  answer = locationSet.size / 2;

  return answer;
}
