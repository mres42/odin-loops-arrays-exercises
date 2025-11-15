/**
 * My Solution
 */
function filterRange(arr, a, b) {
    const newArr = arr.filter((num) => num >= a && num <= b);
    return newArr.sort();
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 3));

/**
 * Notes:
 * Could be done with map()
 * but using filter is easier because it already returns
 * an array and with map() it would need more logic 
 * like adding a ternary or other.
 */
