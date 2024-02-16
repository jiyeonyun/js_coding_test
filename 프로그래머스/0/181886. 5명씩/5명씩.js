function solution(names) {
    var answer = [];
    let nameArr = []
    const division = (arr) => {
  const length = arr.length;
  const divide = Math.floor(length / 5) + (Math.floor( length % 5 ) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 0; i <= divide; i++) {
    newArray.push(arr.splice(0, 5)); 
  }

  return newArray;
}
    nameArr = division(names)
    
    nameArr.forEach((item)=>{
       item[0] &&  answer.push(item[0])
    })
    return answer;
}