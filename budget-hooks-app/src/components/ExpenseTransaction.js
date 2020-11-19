import React from 'react';

// using props to pass expenseTransaction and place it in {} to destructure it
const ExpenseTransaction = ({ expenseTransaction }) => {
  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">
          {expenseTransaction.expenseName}
        </span>
        <span className="transaction-amount">
          ${expenseTransaction.expenseAmount}
        </span>
        <button className="delete-btn">
          <i className="fas fa-trash"></i>
        </button>
      </li>
      ;
    </div>
  );
};

export default ExpenseTransaction;
