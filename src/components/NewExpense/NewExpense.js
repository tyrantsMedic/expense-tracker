import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const addNewExpenseHandler = newExpenseData => props.onAddExpense(newExpenseData);
  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={addNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
