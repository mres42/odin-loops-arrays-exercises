function repeatString(str, repeatTimes) {
    if (repeatTimes < 0) {
        return 'ERROR';
    }

    let s = '';
    for (let i = 0; i < repeatTimes; i++) {
        s += str;
    }
    return s;
}

// alert(repeatString('hey', 3));
console.log(repeatString('hey', 3));