import ExpenseComponent from "./components/expenses/ExpenseComponent";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {
  let currentId = 4;
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = expense => {
    let newExpense = expense;
    newExpense = {
      ...newExpense,
      id: "e" + ++currentId,
    };

    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <ExpenseComponent expenses={expenses} />
    </div>
  );
};

export default App;