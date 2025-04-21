const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = Number(input[0]);  // 첫 번째 입력을 정수로 변환하여 n에 할당
    
    // 직각 이등변 삼각형 그리기
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));  // i개의 '*'을 출력
    }
});