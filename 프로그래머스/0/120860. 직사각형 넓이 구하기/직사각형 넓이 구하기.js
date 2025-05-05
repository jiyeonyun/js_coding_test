function solution(dots) {
  let xArr = dots.map(dot => dot[0]);
  let yArr = dots.map(dot => dot[1]);

  let width = Math.max(...xArr) - Math.min(...xArr);
  let height = Math.max(...yArr) - Math.min(...yArr);

  return width * height;
}