function solution(n)
{
    var answer = 0;
   const str = String(n);
    const newArr = Array.from(str);
    for(let i = 0; i<newArr.length; i++){
        answer = answer + Number(newArr[i])
    }

    return answer;
}