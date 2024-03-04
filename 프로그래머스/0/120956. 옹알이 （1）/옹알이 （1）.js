function solution(babbling) {
    var answer = 0;
    let possible = ["aya","ye","woo","ma"]
    babbling.forEach(item=>{
        let temp = []
        possible.forEach((ptem)=>{ 
           item.includes(ptem)&& temp.push(ptem)
        })
        temp.join("").length == item.length && answer++
    })
    return answer;
}