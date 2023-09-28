"use strict";
//Write a function isMember(mem, arr)
//isMember(mem, arr) returns a boolean indicating whether mem is a member of arr
//Do not use Array helper methods - use a simple for loop
//isMember(5, [1, 3, 7, 12]) // false
//isMember('john', ['jane', 'jim', 'john']) // true
const isMember = (mem, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === mem) {
            return true;
        }
    }
    return false;
};
/*function isMember(mem: string | number, arr: string[] | number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mem) {
      return true;
    }
  }
  return false;
}*/
console.log(isMember(5, [1, 3, 7, 12])); // false
console.log(isMember("john", ["jane", "jim", "john"])); // true
