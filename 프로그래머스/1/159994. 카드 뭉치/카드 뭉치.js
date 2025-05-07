// function solution(cards1, cards2, goal) {
//     var answer = '';
//     let answerArr = []
//     let card1Num = cards1.map((item)=>{
//         return goal.indexOf(item)
//     }).sort((a,b)=>{
//     if(a<b){
//        answerArr.push("No")
//     }
//     })
//     let card2Num = cards2.map((item)=>{
//         return goal.indexOf(item)
//     }).sort((a,b)=>{
//     if(a<b){
//         answerArr.push("No")
//     }
//     })

//     answerArr.length>0?answer = "No":answer = "Yes"
//     return answer;
// }

function solution(cards1, cards2, goal) {
    for (let word of goal) {
        if (cards1[0] === word) {
            cards1.shift();
        } else if (cards2[0] === word) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    return "Yes";
}
