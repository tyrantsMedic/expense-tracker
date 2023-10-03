import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseComponent.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const ExpenseComponent = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const selectedFilterHandler = filter => setSelectedFilter(filter);

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedFilter
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onSelectedFilter={selectedFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {filteredExpenses.length === 0 && (
        <h2 className="expenses-list__fallback">No Expense Found</h2>
      )}
    </Card>
  );
};

export default ExpenseComponent;
