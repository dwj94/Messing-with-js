//challenge, addIncome function, resetAccount function to zero, getAccountSummary

// add income
// add expense, add expense
// get summary
// reset
// get summary

let myAccount = {
    name: 'dan',
    expenses: 0,
    income: 0
}

let addExpense = function(account, total) {
    account.expenses += total
}

let addIncome = function(account, total) {
    account.income += total
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

let getSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account ${account.name} has $${account.expenses} in expenses and $${account.income} in income, which is $${balance} balance`
}

addIncome(myAccount, 100)
addExpense(myAccount, 10)
addExpense(myAccount, 23)
console.log(getSummary(myAccount))
resetAccount(myAccount)
console.log(getSummary(myAccount))
