"use strict";
const updateAssignement = (assign, propsToUpadate) => {
    return Object.assign(Object.assign({}, assign), propsToUpadate);
};
const assign1 = {
    studentId: "compsci123",
    title: "final project",
    grade: 0
};
console.log(updateAssignement(assign1, { grade: 95 }));
const assignGraded = updateAssignement(assign1, { grade: 95 });
console.log(assignGraded);
// require and readonly utlity types
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//recordAssignment(assignGraded)
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const HexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FFF"
};
const score = {
    studentId: "K123",
    grade: 66
};
const preview = {
    studentId: "J123",
    title: "Final project"
};
// Return Type
const createNewAssign = (title, points) => {
    return { title, points };
};
// awaited return type is used to get the resolve of a promise in an async function
