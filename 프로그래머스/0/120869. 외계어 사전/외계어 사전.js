function solution(spell, dic) {
    var answer = 2;
    
    dic.forEach((item)=>{
        let i = 0
        spell.forEach((stem)=>{
            if(item.includes(stem)){
                i++
            }
        })
      if(  i == spell.length){
          answer = 1
      }
    })
    return answer;
}