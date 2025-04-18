function solution(hp) {
    const generals = Math.floor(hp / 5);         // 장군개미 수
    const soldiers = Math.floor((hp % 5) / 3);   // 병정개미 수
    const workers = (hp % 5) % 3;                // 일개미 수

    return generals + soldiers + workers;
}
