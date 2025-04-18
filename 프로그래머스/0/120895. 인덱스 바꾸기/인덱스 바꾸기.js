function solution(my_string, num1, num2) {
    var answer = '';
    let arr = [...my_string]
    let item = arr[num1]
arr[num1] = arr[num2];
arr[num2] = item
    return arr.join("");
}