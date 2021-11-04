import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  amount,
  charge,
  handleSubmit,
  handleCharge,
  handleAmount,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. rent"
            name="charge"
            id="charge"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="e.g. 100"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-sub">
        {edit ? "edit" : "Submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
