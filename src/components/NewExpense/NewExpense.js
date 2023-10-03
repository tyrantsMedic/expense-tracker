import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseform, setShowExpenseForm] = useState(false);

  const addNewExpenseHandler = newExpenseData => {
    props.onAddExpense(newExpenseData);
    setShowExpenseForm(false);
  }

  const formCancelHandler = () => setShowExpenseForm(false);
  const displayFormHandler = () => setShowExpenseForm(true);

  return (
    <div className="new-expense">
      {!showExpenseform ? (
        <button onClick={displayFormHandler}>Add new expense</button>
      ) : (
        <ExpenseForm onAddNewExpense={addNewExpenseHandler} onCancel={formCancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
