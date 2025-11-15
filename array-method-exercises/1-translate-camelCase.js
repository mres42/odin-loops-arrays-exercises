/**
 * My Solution
 */
function camelize(string) {
    const split = string.split("-");
    let newString = split.splice(0, 1);
    for(let str of split) {
        let cap = str.charAt(0).toUpperCase();
        cap += str.slice(1);
        newString.push(cap);
    }
    const joinedStr = newString.join("");
    return joinedStr;
}

console.log(camelize("abc-def-ghi"));

/**
 * Notes:
 * Recommended solution shows the use of map()
 * my solution is old fashioned using basic loops
 * using map() would be cleaner and more functional
 */