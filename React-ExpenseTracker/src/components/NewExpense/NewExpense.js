import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [expandedForm, setExpandedForm] = useState(false);

  const expandFormHandler = () => {
    setExpandedForm(true);
  };

  const cancelHandler = (event) => {
    setExpandedForm(event);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpandedForm(false);
  };

  return (
    <div className="new-expense">
      {!expandedForm && (
        <button type="button" onClick={expandFormHandler}>
          Add New Expense
        </button>
      )}
      {expandedForm && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
