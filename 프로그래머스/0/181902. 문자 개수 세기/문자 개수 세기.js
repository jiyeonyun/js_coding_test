function solution(my_string) {
    var answer = [];
    let temp = new Array(52).fill(0);
    [...my_string].map((item) => {
        const charCode = item.charCodeAt(0);
        if (charCode <= 90) {
            temp[charCode - 65] = temp[charCode - 65]+1; 
        } else {
            temp[charCode - 71] = temp[charCode - 71]+1; 
        }
    });
    return temp;
}
