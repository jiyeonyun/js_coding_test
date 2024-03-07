function solution(t, p) {
    let total = [];
    let origin = t;

    for (let i = 0; i <= t.length - p.length; i++) {
        total.push(origin.substring(i, i + p.length));
    }
    const newArr = total.filter((item)=>{
       return  Number(item) <= Number(p)
    })
    console.log(newArr)
    return newArr.length
}
