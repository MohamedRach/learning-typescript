interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignement = (assign: Assignment, propsToUpadate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpadate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "final project",
    grade: 0
}
console.log(updateAssignement(assign1, {grade : 95}))
const assignGraded: Assignment = updateAssignement(assign1, {grade : 95})
console.log(assignGraded)


// require and readonly utlity types

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified : Readonly<Assignment> = {...assignGraded, verified: true}
//recordAssignment(assignGraded)
recordAssignment({...assignGraded, verified: true})

// Record
const HexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FFF"
}

// Pick & omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "K123",
    grade: 66
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "J123",
    title: "Final project"
}

// Exclude & Extract
type letterGrades = "U" | "A" | "D"

type adjustedGrade = Exclude<letterGrades, "U">
type higherGrade = Extract<letterGrades, "A">

type studentNames = "Dave" | "Hamid" | null | undefined

type NamesOnly = NonNullable<studentNames>

// Return Type

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

// awaited return type is used to get the resolve of a promise in an async function