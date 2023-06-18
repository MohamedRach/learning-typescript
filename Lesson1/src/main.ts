/* Lesson 2 code
let album: number | string
let re: RegExp


const sum = (a: number, b: number) => {
    return a + b
}
*/


// lesson 3 code
/*
let stringArr: (string | number)[] = ["one", "hey", "Dave"]
let guitars = ["strat", "Les Paul", 5150]

let myTuple: [string, number, boolean] = ["Dave", 42, true]

const exampleObj = {
    prop1: "Dave",
    prop2: true
}

//exampleObj.prop1 = 32

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}
let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "Hello"]
}
let jimmie: Guitarist = {
    name: "Jimmie",
    albums: [1984, 5150, "Hello"]
}
//console.log(jimmie.active?.valueOf())

enum Grad {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grad.B)*/

// lesson 4 code
/*
//type aliases
type stringOrNumberArray = (string | number) []

type Guitarist = {
    name: string,
    active?: boolean,
    albums: stringOrNumberArray
} // this is not possible with interface

//literal types
let myName: "Dave"
let userName: 'Dave' | 'John' | 'Amy'
userName = "Amy"

// function
type MathFunction = (c: number, d: number) => number
const add: MathFunction = (a, b)=> {
    return a + b
}
const logMsg = (message: string): void => {
    console.log(message)
}

// Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
console.log(total(1,2,3))
*/

// lesson 5

//type casting or type assertions
type One = string
type Two = string | number
type Three = "hello"

let a: One = "hamid"
let b = 12 as Two
let c = a as Three
console.log(b, typeof b)
let d = <One>'World'
let e = <string | number>'world'
console.log(e, typeof e)

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === "add") return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,3, 'concat') as string

//the dom
const MyImg = document.querySelector('img')!
const img = document.getElementById('img') as HTMLImageElement // ! not null assertion
img.src
MyImg.src