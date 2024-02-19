function solution(my_string) {
    var answer = my_string.replaceAll("  "," ").split(" ").filter(item=>item !== "");

    return answer;
}