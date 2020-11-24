import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// import ReactFrappeChart from 'react-frappe-charts';

const Balance = () => {
  const {
    totalBudget,
    formattedTotalBudget,
    formattedTotalExpense,
    formattedTotalIncome,
  } = useContext(GlobalContext);

  return (
    <div className="balance">
      <h2
        style={totalBudget >= 0 ? { color: '#23cc4a' } : { color: '#ff716e' }}
      >
        ${formattedTotalBudget}{' '}
      </h2>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>${formattedTotalIncome}</p>
        </div>
        <div className="minus">
          <h3> Expense</h3>
          <p>${formattedTotalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
