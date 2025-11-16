function removeFromArray(arr, arg) {
    const newArr = arr.filter((x) => x !== arg);
    return newArr;
}

console.log(removeFromArray([1, 2, 3, 4], 3));