function solution(n, arr1, arr2) {
    var answer = [];
   
    let arr1to2 = arr1.map((item)=>{
        return item.toString(2).padStart(n, '0')
    })
    let arr2to2 = arr2.map((item)=>{
       return item.toString(2).padStart(n, '0')
    })
    
for (let i = 0; i < n; i++) {
        let rowResult = "";
        for (let j = 0; j < n; j++) {
            rowResult += (Number(arr1to2[i][j]) + Number(arr2to2[i][j])) ? "#" : " ";
        }
        answer.push(rowResult.substring(0, n)); // 각 행을 5개씩 자른 결과를 추가
        rowResult = rowResult.substring(n); // 다음 행을 위해 잘라낸 부분은 제거
    }

    return answer;
}