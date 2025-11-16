function sumAll(x, y) {
    if (x > y) {
        return "First argument is start and second is end.";
    }

    let total = 0;
    for (let i = x; i <= y; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll(1, 4));