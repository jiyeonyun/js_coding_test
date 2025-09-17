function solution(s, skip, index) {
  const skipSet = new Set([...skip]); // 스킵할 문자들
  return [...s]
    .map((char) => {
      let code = char.charCodeAt(); // 현재 문자 코드
      let cnt = 0;

      while (cnt < index) {
        code++;
        if (code > 122) code = 97; // 'z' 넘어가면 'a'
        const nextChar = String.fromCharCode(code);
        if (!skipSet.has(nextChar)) cnt++;
      }

      return String.fromCharCode(code);
    })
    .join("");
}
