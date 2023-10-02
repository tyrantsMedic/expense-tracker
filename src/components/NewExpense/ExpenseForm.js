import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = React.useState("");
    const [amount, setAmount] = React.useState("");
    const [date, setDate] = React.useState("");

    const titleChangeHandler = e => setTitle(e.target.value);
    const amountChangeHandler = e => setAmount(e.target.value);
    const dateChangeHandler = e => setDate(e.target.value);

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.onAddNewExpense(expenseData);

        setTitle("");
        setAmount("");
        setDate("")
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
