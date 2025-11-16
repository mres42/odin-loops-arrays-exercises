function unique(arr) {
  // simple performant solution
  // return [...new Set(arr)];

    const newArr = [];
    for (let str of arr) {
      if (!newArr.includes(str)) {
        newArr.push(str);
      }
    }   
    return newArr;
  }



let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O