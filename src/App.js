import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const addExpenseHandler = (expense) =>{
    // console.log(expense);
  }

  const expenses = [
    { id: 'e1', title: "New Mobile", amount: 300, date: new Date(2021, 5, 1) },
    { id: 'e2', title: "Food", amount: 200, date: new Date(2021, 5, 1) },
    { id: 'e3',title: "Stationary", amount: 100, date: new Date(2021, 5, 7) },
    { id: 'e4', title: "Paint", amount: 300, date: new Date(2021, 5, 15) },
    { id: 'e5', title: "Car Repairs", amount: 900, date: new Date(2021, 5, 15) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
