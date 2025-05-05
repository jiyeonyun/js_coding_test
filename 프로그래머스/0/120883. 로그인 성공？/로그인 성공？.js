function solution(id_pw, db) {
    var answer = 'fail';
    db.forEach((item)=>{
        let i =0
        let isId = true
    id_pw.forEach((stem,n)=>{
        if(item.includes(stem)){
            i ++
        }else{
            n !== 0 ?isId = false : isId = true
        }
    })
        if(i ==2){
            answer = "login"
        }else if(i == 1){
            if(!isId){
                answer = "wrong pw"
            }
        }
    })
    return answer;
}