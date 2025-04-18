function solution(numbers) {
    var answer = 0;
    let newArr = numbers.sort(function(a,b){
        return b-a
    })
    answer = newArr[0]*newArr[1]
    return answer;
}