function solution(n, m, section) {
    var answer = 0;
    let warArr = new Array(n).fill(true).map((item,i)=>{
        return section.includes(i+1) ? false :true
    })
     for (let i = 0; i < warArr.length; i++) {
        if (warArr[i] === false) {
            warArr.splice(i, m, ...new Array(m).fill(true));
            answer++
        }
    }
   
    return answer;
}