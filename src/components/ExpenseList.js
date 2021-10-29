import React from "react";
import ExpenceItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ exepenses }) => {
  return (
    <>
      <ul>
        {exepenses.map((expense) => {
          return <ExpenceItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {exepenses.length > 0 && (
        <button className="btn">
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
