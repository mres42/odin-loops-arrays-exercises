function reverseString(str) {
    let s = ''
    let strArr = str.split("");
    for (let i = str.length - 1; i >= 0; i--) {
        s += strArr[i];
    }
    return s;
}


console.log(reverseString("hello there"));