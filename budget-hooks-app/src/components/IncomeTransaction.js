import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// using props to pass incomeTransaction and place it in {} to destructure it
const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">{incomeTransaction.incomeName}</span>
        <span className="transaction-amount">
          $
          {incomeTransaction.incomeAmount.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </span>
        {/* added an onClick attribute to the delete btn */}
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(incomeTransaction.id)}
        >
          <i className="fas fa-trash"></i>
        </button>{' '}
        <button
          className="btn-edit"
          // onClick={() => findItem(task.id)}
        >
          <i className="fas fa-pen"></i>
        </button>
      </li>
    </div>
  );
};

export default IncomeTransaction;
