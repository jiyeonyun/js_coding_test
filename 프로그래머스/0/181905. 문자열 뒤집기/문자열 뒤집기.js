function solution(my_string, s, e) {
    var answer = '';
    let origin = [...my_string];
    let change = origin.slice(s, e + 1).reverse().join(""); 
    origin.splice(s, e - s + 1, change); 
    return origin.join(""); 
}