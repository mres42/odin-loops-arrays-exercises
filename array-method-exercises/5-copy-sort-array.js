let arr = ["HTML", "JavaScript", "CSS"];

// solution
function copySorted(array) {
    const sorted = array.sort();
    return sorted;
}


// ****************************************
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)