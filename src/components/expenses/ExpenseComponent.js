import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseComponent.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseComponent = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const selectedFilterHandler = (filter) => setSelectedFilter(filter);
  let expenseFound = false;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onSelectedFilter={selectedFilterHandler}
      />
      <ul className="expenses-list">
        {props.expenses.map((expense) => {
          if (expense.date.getFullYear().toString() === selectedFilter) {
            expenseFound = true;
            return <ExpenseItem key={expense.id} expense={expense} />;
          }
          return null;
        })}
      </ul>
      {expenseFound === false && (
        <h2 className="expenses-list__fallback">No Expense Found</h2>
      )}
    </Card>
  );
};

export default ExpenseComponent;
