import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// using props to pass expenseTransaction and place it in {} to destructure it
const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">
          {expenseTransaction.expenseName}
        </span>
        <span className="transaction-amount">
          ${expenseTransaction.expenseAmount}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(expenseTransaction.id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
      ;
    </div>
  );
};

export default ExpenseTransaction;
