function solution(array) {
    var answer = [];
    let newArr = [...array].sort(function(a,b){return a-b})
    console.log(array)
    answer = [newArr[newArr.length-1],array.indexOf(newArr[newArr.length-1])]
    return answer;
}