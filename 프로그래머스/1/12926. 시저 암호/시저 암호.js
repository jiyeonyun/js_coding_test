function solution(s, n) {
    var answer = [...s].map((item) => {
        if (item === " ") {
            return " ";
        } else {
            if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
                // 대문자 처리
                let encryptedCharCode = item.charCodeAt() + n;
                if (encryptedCharCode > 90) {
                    encryptedCharCode -= 26;
                }
                return String.fromCharCode(encryptedCharCode);
            } else if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
                // 소문자 처리
                let encryptedCharCode = item.charCodeAt() + n;
                if (encryptedCharCode > 122) {
                    encryptedCharCode -= 26;
                }
                return String.fromCharCode(encryptedCharCode);
            }
        }
    }).join("");
    return answer;
}
