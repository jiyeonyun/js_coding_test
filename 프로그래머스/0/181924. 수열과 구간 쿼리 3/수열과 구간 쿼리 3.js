function solution(arr, queries) {

    for(let query of queries){
        let temp = arr[query[0]]
        arr[query[0]] = arr[query[1]]
        arr[query[1]] = temp
    }
    return arr;
}