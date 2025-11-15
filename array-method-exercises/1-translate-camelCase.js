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
 * Recommended solution
 */
// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }