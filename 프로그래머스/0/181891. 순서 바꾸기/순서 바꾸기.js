function solution(num_list, n) {
    var answer = [];
    let first = num_list.slice(n)
    let second = num_list.slice(0,n)
    answer = [...first,...second]
    return answer;
}