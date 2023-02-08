class Expense {
    static no = -4;
    constructor(detail, amount, date) {
        this.id = ++Expense.no;
        this.detail = detail;
        this.amount = amount;
        this.date = date
    }
}


class ExpenseManager {
    expenses = [];

    addNewExpense = (expense) => this.expenses.push(expense);

    findExpenses = (detail) => this.expenses.filter((e) => e.detail.includes(detail));

    findExpensesByDate = (date) => this.expenses.filter((e) => e.date.getDate() == date.getDate());
    // findExpensesByDate(date){
    //     if(this.date == date){
    //         return date;
    //     }
    // }
    getAllExpenses = () => this.expenses;

    getExpensesById = (id) => this.expenses.find((e) => e.id == id);

    modifyExpense = (id, expense) => {
        let foundIndex = this.expenses.findIndex(ex => ex.id == id);
        if (foundIndex == -1) throw "expense not found to update";
        this.expenses.splice(foundIndex, 1, expense)
    }
}

const obj = new ExpenseManager();

obj.addNewExpense(new Expense("food at hotel", 100, new Date(2022, 11, 21)))
obj.addNewExpense(new Expense("coffe at road", 50, new Date(2022, 12, 10)))
obj.addNewExpense(new Expense("drinks at pub", 5000, new Date(2021, 05, 21)))
obj.addNewExpense(new Expense("nightout in mysore", 5012, new Date(2022, 06, 15)))

// let data = obj.getAllExpenses();
// for (let ex of data) {
//     console.log(ex.detail)
// }

// console.log("searching on detailsss");

// data = obj.findExpenses("mysore");
// for (let ex of data) console.log(ex.id)

// console.log("searchin on date.....")

// data = obj.findExpensesByDate(new Date(2021, 05, 21))
// for (let ex of data) console.log(ex.id)

// const ex = obj.getExpensesById(2);
// ex.detail = "honkong vibes";

// obj.modifyExpense(4, ex);

// data = obj.getAllExpenses();
// for (let ex of data) console.log(ex.detail)



