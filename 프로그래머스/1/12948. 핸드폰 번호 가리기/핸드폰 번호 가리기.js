function solution(phone_number) {
    var hiddenPart = phone_number.slice(0, -4).replace(/[0-9]/g, "*");
    var visiblePart = phone_number.slice(-4);
    return hiddenPart + visiblePart;
}