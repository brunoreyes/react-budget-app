import React from 'react';

// using props to pass incomeTransaction and place it in {} to destructure it
const IncomeTransaction = ({ incomeTransaction }) => {
  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">{incomeTransaction.incomeName}</span>
        <span className="transaction-amount">
          ${incomeTransaction.incomeAmount}
        </span>
        <button className="delete-btn">
          <i className="fas fa-trash"></i>
        </button>
      </li>
      ;
    </div>
  );
};

export default IncomeTransaction;
