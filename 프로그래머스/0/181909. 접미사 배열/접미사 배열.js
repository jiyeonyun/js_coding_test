function solution(my_string) {
    var answer = [];
    for(let i = 0; i<my_string.length; i++){
    my_string.slice(i,my_string.length) !== undefined && answer.push(my_string.slice(i,my_string.length))
    }  
    return answer.sort();
}