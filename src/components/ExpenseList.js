import React from "react";
import ExpenceItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ exepenses, handleClear, handleDelete, handleEdit }) => {
  return (
    <>
      <ul>
        {exepenses.map((expense) => {
          return (
            <ExpenceItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {exepenses.length > 0 && (
        <button className="btn" onClick={handleClear}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
