import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Internet bill",
    amount: 15,
    date: new Date(2021, 5, 15),
  },
  {
    id: "e2",
    title: "Electricity bill",
    amount: 200,
    date: new Date(2022, 6, 21),
  },
  {
    id: "e3",
    title: "Water bill",
    amount: 10,
    date: new Date(2022, 7, 10),
  },
  {
    id: "e4",
    title: "Phone bill",
    amount: 45,
    date: new Date(2022, 7, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
