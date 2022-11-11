import React,{useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPEXSES = [
  { id: 'e1', title: "New Mobile", amount: 300, date: new Date(2022, 6, 1) },
  { id: 'e2', title: "Food", amount: 200, date: new Date(2023, 7, 1) },
  { id: 'e3',title: "Stationary", amount: 100, date: new Date(2023, 5, 7) },
  { id: 'e4', title: "Paint", amount: 300, date: new Date(2024, 2, 15) },
  { id: 'e5', title: "Car Repairs", amount: 900, date: new Date(2025, 5, 15) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPEXSES);
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
