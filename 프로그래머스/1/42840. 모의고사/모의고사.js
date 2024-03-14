function solution(answers) {
    var answer = [];
    let score = new Array(3).fill(0)
    
    let first = [1,2,3,4,5]
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3,3,1,1,2,2,4,4,5,5]
    
   const check = (array,num) => {
        answers.forEach((item, i) => {
            let index = i % array.length; 
            if (array[index] === item) {
                score[num]++; 
            }
        });
    }

    check(first,0);
    check(second,1);
    check(third,2);

   const max = Math.max(...score);
    var idx = score.indexOf(max);
    while (idx != -1) {
    answer.push(idx+1);
  idx = score.indexOf(max, idx + 1);
}
     return answer.sort((a, b) => a - b);
}