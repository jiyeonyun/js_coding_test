function solution(n, lost, reserve) {
    // 교집합 제거
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a,b)=>a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a,b)=>a - b);;

    let answer = n - realLost.length;

    realLost.forEach(l => {
        if (realReserve.includes(l - 1)) {
            realReserve.splice(realReserve.indexOf(l - 1), 1);
            answer++;
        } else if (realReserve.includes(l + 1)) {
            realReserve.splice(realReserve.indexOf(l + 1), 1);
            answer++;
        }
    });

    return answer;
}