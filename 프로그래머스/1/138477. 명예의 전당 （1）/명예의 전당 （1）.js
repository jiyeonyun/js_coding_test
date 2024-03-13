function solution(k, score) {
    var answer = [];
    let rankArr = []
    score.forEach((item)=>{
        if(rankArr.length < k){
            rankArr.push(item)
            rankArr.sort(function(a, b) {
                    return a - b;
                });
        }else{
           if(rankArr[0]<item){
                let shiftedValue = rankArr.shift(); // 첫 번째 요소 제거
            rankArr.push(item);
            rankArr.sort(function(a, b) {
                return a - b;
            });
           }
        }
         let minScore = rankArr[0]; // 최소값
        answer.push(minScore);
    })
    console.log(rankArr)
    return answer;
}
