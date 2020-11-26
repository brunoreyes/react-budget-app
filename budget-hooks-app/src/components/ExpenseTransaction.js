import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// using props to pass expenseTransaction and place it in {} to destructure it
const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction, findExpense, editExpenseTransaction } = useContext(
    GlobalContext
  );

  return (
    <div>
      <li className="transaction">
        {' '}
        {expenseTransaction.expenseDate ? (
          <i className="far fa-calendar">
            <div className="transaction-date">
              {' '}
              {expenseTransaction.expenseDate.slice(-2)}
            </div>
          </i>
        ) : null}
        <span className="transaction-text">
          {expenseTransaction.expenseName}
        </span>
        <span className="transaction-amount">
          -$
          {expenseTransaction.expenseAmount.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </span>{' '}
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(expenseTransaction.id)}
        >
          <i className="fas fa-trash"></i>{' '}
        </button>{' '}
        <button
          className={
            editExpenseTransaction === expenseTransaction
              ? 'btn-editing'
              : 'btn-edit'
          }
          onClick={() => findExpense(expenseTransaction)}
        >
          {' '}
          <i className="fas fa-pen"></i>
        </button>
      </li>
    </div>
  );
};

export default ExpenseTransaction;
