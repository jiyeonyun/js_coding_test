function solution(answers) {
    var answer = [];
    const score =[0,0,0]
    const patterns = [
        [1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]
    ]
   
    answers.forEach((item,i)=>{
        patterns.forEach((pattern,j)=>{
            if(pattern[i%pattern.length]==item){
                score[j] += 1;
            }
        })
    })
   
    const MaxScores = Math.max(...score)
    console.log(MaxScores)
    score.forEach((item,i)=>{
        if(item == MaxScores){
            answer.push(i+1)
        }
    })
    return answer;
}