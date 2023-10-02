import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseComponent.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseComponent = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const selectedFilterHandler = filter => setSelectedFilter(filter);

  return (
      <Card className="expenses">
        <ExpensesFilter selected={selectedFilter} onSelectedFilter={selectedFilterHandler} />
        {props.expenses.map((expense) => {
          if (expense.date.getFullYear().toString() === selectedFilter) return <ExpenseItem key={expense.id} expense={expense} />;
          return null;
        })}
      </Card>
  );
};

export default ExpenseComponent;
