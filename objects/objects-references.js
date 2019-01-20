let myAccount = {
    name: 'dan',
    expenses: 0,
    income: 0
}

let addExpense = function(account, total) {
    account = {} // if you change the whole object then it doesn't edit the same object in ram
    //account.expenses += total
    console.log(account)
}

addExpense(myAccount, 15) // when you pass an object it is using the exact object so changes
                          // in the function to key, value pairs will change the original object
console.log(myAccount)

