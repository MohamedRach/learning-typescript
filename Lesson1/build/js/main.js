"use strict";
/* Lesson 2 code
let album: number | string
let re: RegExp


const sum = (a: number, b: number) => {
    return a + b
}
*/
let a = "hamid";
let b = 12;
let c = a;
console.log(b, typeof b);
let d = 'World';
let e = 'world';
console.log(e, typeof e);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
//the dom
const MyImg = document.querySelector('img');
const img = document.getElementById('img'); // ! not null assertion
img.src;
MyImg.src;
