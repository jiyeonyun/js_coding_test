function solution(phone_book) {
    var answer = true;
    phone_book.sort().forEach((item, i, arr) => {
        if (i < arr.length - 1 && arr[i + 1].startsWith(item)) {
            answer = false;
        }
    });
    return answer;
}
