function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (/^[0-9]+$/.test(s)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}