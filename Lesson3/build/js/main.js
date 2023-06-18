"use strict";
// Index signatures
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const Said = {
    name: "said",
    GPA: 3.5,
    classes: [100, 200]
};
const monthlyIncoms = {
    salary: 345,
    bonus: 237,
    sidehustle: 679
};
///////////////////////////////////// generics
const echo = (arg) => arg;
const processUser = (user) => {
    return user;
};
console.log(processUser({ name: "hamid", id: 45 }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
