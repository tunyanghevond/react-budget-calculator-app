import React, { useState, useEffect } from "react";
import "./App.css";

import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuid } from "uuid";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [exepenses, setEexpenses] = useState(initialExpenses);
  const [charge, setCharege] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(exepenses));
  }, [exepenses]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleCharge = (e) => {
    setCharege(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const editItem = exepenses.map((item) => {
          return item.id === editId ? { ...item, charge, amount } : item;
        });
        setEexpenses(editItem);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        let newItem = { id: uuid(), charge, amount };
        setEexpenses([...exepenses, newItem]);
        handleAlert({ type: "success", text: "item added" });
      }

      setAmount("");
      setCharege("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`,
      });
    }
  };

  const handleClear = () => {
    setEexpenses([]);
    handleAlert({ type: "success", text: "items cleared" });
  };

  const handleDelete = (id) => {
    const newExpense = exepenses.filter((item) => item.id !== id);
    setEexpenses(newExpense);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = (id) => {
    const newExpense = exepenses.find((item) => item.id === id);
    const { charge, amount } = newExpense;
    setEdit(true);
    setEditId(id);
    setCharege(charge);
    setAmount(amount);
  };

  return (
    <>
      <Alert type={alert.type} text={alert.text} />

      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          exepenses={exepenses}
          handleClear={handleClear}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
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
