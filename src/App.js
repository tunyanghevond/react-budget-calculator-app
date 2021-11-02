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
  const [charge, setCharege] = useState("");
  const [amount, setAmount] = useState("");

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleCharge = (e) => {
    setCharege(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      let newItem = { id: uuid(), charge, amount };
      setEexpenses([...exepenses, newItem]);
      setAmount("");
      setCharege("");
    } else {
      // alert
    }
  };

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList exepenses={exepenses} />
      </main>
      <h1>
        Total Spending:
        <span className="total">
          $
          {exepenses.reduce((acc, val) => {
            return (acc += parseInt(val.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
