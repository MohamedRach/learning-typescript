class Coder {
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = "TypeScript"){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder("Sadek", "Rap", 21, "Python")
// console.log(Dave.getAge())
// console.log(Dave.name)

class webDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number){
        super(name, music, age)
        this.computer = computer
    }
    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new webDev('Mac', 'Sara', 'Lofi', 25)
//console.log(Sara.getLang())
/////////////////////////////////////////////

interface Musician {
    name: string
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Ahmed = new Guitarist("Ahmed", "Guitar")
//console.log(Ahmed.play("plays"))

//////////////////////////////////////////////////

class Peeps {
    static count: number = 0 // it plays directly to the class

    static getCount(): number {
        return Peeps.count
    }
    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}
const john = new Peeps('john')
const steve =new Peeps('steve')
const hamid = new Peeps('hamid')
// console.log(steve.id)
// console.log(Peeps.count)

//////////////////////////////

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }
    public set data(value: string[]){
        if(Array.isArray(value) && value.every((el) => typeof el === 'string')){
            this.dataState = value
            return
        } else throw new Error("Param is not an array of strings")
    }
}

const myBands = new Bands()
myBands.data = ["nass alghiwan", "almchaheb"]
console.log(myBands.data)