const account = {
    name: 'Dan',
    expenses: [], // you might load some data in here when the application starts
    income: [],
    addExpense: function (description, amount) { // add a method to the object to add an expense
        this.expenses.push({title: description, money: amount }) // use this to add to the object being used
    },
    addIncome: function (description, amount) { // same method for income
        this.income.push({title: description, money: amount})
    },
    getAccountSummary: function () { // method to calculate expenses and spit out summary
        let sumExpenses = 0
        let sumIncome = 0
        this.expenses.forEach(function (item, index) {  // iterate over each expense and add to sum of expenses
            return sumExpenses += item.money
        })
        this.income.forEach(function (item, index) {  // iterate over each expense and add to sum of expenses
            return sumIncome += item.money
        })
        return `Hi ${this.name}, you have $${sumIncome - sumExpenses} on balance - you had $${sumIncome} income and $${sumExpenses} expenses.`
    }
}

// Expense with description and amount
// addExpense, description and amount for expense
// getAccountSummary - total up all expenses and print message for how much the account holder has

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)



// add an income array to the account
// addIncome method, where it's from and amount

// tweak getAccountSummary
// Dan has a balance of diff, then money in income and money in expenses
account.addIncome('Job', 1000)

console.log(account.getAccountSummary())
