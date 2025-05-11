function solution(participant, completion) {
    var answer = '';
    let map = new Map();
    for (let person of participant) {
        map.set(person, (map.get(person) || 0) + 1);
    }

    for (let person of completion) {
        map.set(person, map.get(person) - 1);
    }
   for (let [key, value] of map) {
        if (value > 0) return key;
    }
    return answer;
}