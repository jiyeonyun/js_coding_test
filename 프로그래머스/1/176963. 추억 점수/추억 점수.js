function solution(name, yearning, photo) {
    var answer = [];
    let scoreArr = name.map((item,i)=>{ return {name:item,score:yearning[i]}})
    photo.forEach((item,i)=>{
        let a = 0
        item.forEach((name,j)=>{
           const score = scoreArr.find((findName)=> findName.name == name)
           if(score?.score){
                a = a + score.score
           }
           
        })
         answer.push(a)
    })
    return answer;
}