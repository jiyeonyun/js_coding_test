function solution(num_list) {
    let sum1= []
    let sum2= []
    for(let num of num_list){
        num%2===0? sum1.push(num):sum2.push(num)
    }
    return Number(sum1.join("")) + Number(sum2.join(""))
}