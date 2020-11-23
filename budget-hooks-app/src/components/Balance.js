import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// import ReactFrappeChart from 'react-frappe-charts';

const Balance = () => {
  const {
    formattedTotalBudget,
    formattedTotalExpense,
    formattedTotalIncome,
  } = useContext(GlobalContext);

  return (
    <div className="balance">
      <h2>{formattedTotalBudget} </h2>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+{formattedTotalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-{formattedTotalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
