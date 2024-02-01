function solution(my_string, queries) {
    var answer = '';
    let result = Array.from(my_string);

    for (let query of queries) {
        const [start, end] = query;
        const reversedSubstring = result.slice(start, end + 1).reverse();
        result.splice(start, reversedSubstring.length, ...reversedSubstring);
    }

    answer = result.join('');
    return answer;
}