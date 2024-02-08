function solution(q, r, code) {
    var answer = [];
    var indices = [];
    let codeArr = [...code]
    let indexArr=[]
    codeArr.map((item,i)=>{
        indexArr.push(i%q)
    })
    
let idx = indexArr.indexOf(r);
while (idx != -1) {
  indices.push(idx);
  idx = indexArr.indexOf(r, idx + 1);
}
codeArr = indices.map((item)=>{
    answer.push(codeArr[item])
})
    return answer.join("");
}