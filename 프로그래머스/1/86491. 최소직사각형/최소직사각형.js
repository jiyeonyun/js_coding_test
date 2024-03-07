function solution(sizes) {
    var answer = 0;
    let maxrow = 0;
    let maxcol = 0;
    const newArr = sizes.map((item)=>{
        if(item[0]<item[1]){
            return [item[1],item[0]]
        }else{
            return item
        }    
    })
        newArr.forEach((item)=>{
            if(item[0]> maxrow){
                maxrow = item[0]
            }
            if(item[1]> maxcol){
                maxcol = item[1]
            }
        })
    answer = maxrow*maxcol
    return answer;
}