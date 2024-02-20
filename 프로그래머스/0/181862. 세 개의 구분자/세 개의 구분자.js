function solution(myStr) {
    let answer = [];
    let str = ["a", "b", "c"];
    let startIdx = 0;
    
    
    for (let i = 0; i < myStr.length; i++) {
        if (str.includes(myStr[i])) {
         
            let slicedStr = myStr.slice(startIdx, i);
            if (slicedStr.length > 0) {
                answer.push(slicedStr);
            } 
            startIdx = i + 1; 
        }
    }
    
    let lastStr = myStr.slice(startIdx);
    if (lastStr.length > 0) {
        answer.push(lastStr);
    } else {
        answer.push("EMPTY");
    }
    
    return answer;
}


