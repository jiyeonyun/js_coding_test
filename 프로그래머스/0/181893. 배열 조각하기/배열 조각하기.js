function solution(arr, query) {
    let answer = arr;
  
  
    query.forEach((item, i) => {
        if (i % 2 === 0) { 
            answer = answer.slice(0, item +1 );
        } else { 
            answer = answer.slice(item);
        }
    });

    return answer;
}