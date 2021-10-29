import React, { useState } from "react";
import "./App.css";

import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 950 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 200 },
];

function App() {
  const [exepenses, setEexpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList exepenses={exepenses} />
      </main>
      <h1>
        Total Spending:
        <span className="total">
          $
          {exepenses.reduce((acc, val) => {
            return (acc += val.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
