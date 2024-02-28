function solution(arr) {
    let length1 = arr.length;
    let length2 = arr[0].length;
    
    if (length1 > length2) {
        for (let i = 0; i < length1 - length2; i++) {
            arr.forEach((item) => {
                item.push(0);
            });
        }
    } else if (length1 < length2) {
        for (let i = 0; i < length2 - length1; i++) {
            arr.push(Array(length2).fill(0));
        }
    }
    
    return arr;
}