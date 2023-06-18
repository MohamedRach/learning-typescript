// Index signatures

interface TransactionObj {
    [index: string]: number
}

const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}
//console.log(todaysNet(todaysTransaction))

interface student {
    name: string
    GPA: number
    classes?: number[]
}

const Said: student = {
    name: "said",
    GPA: 3.5,
    classes: [100, 200]
}
// for(const key in Said){
//     console.log(`${key}: ${Said[key as keyof student]}`)
// }
// for(const key in Said){
//     console.log(`${Said[key as keyof typeof Said]}`)
// }

type Streams = "salary" | "bonus" | "sidehustle"

type incomes = Record<Streams, number>

const monthlyIncoms: incomes = {
    salary: 345,
    bonus: 237,
    sidehustle: 679
}

///////////////////////////////////// generics

const echo = <T>(arg: T): T => arg

interface hasID {
    id: number
}

const processUser = <T extends hasID>(user: T): T => {
    return user
}

console.log(processUser({name: "hamid", id: 45}))

const getUsersProperty = <T extends hasID, k extends keyof T>(users: T[], key: k): T[k][] => {
    return users.map((user) => user[key])
}