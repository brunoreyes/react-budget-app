import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Zoom from 'react-reveal/Zoom';

const Balance = () => {
  const {
    formattedTotalBudget,
    formattedTotalExpense,
    formattedTotalIncome,
  } = useContext(GlobalContext);

  return (
    <div className="balance">
      <h2>
        {formattedTotalBudget <= 0.01 ? '-$' : '$'}
        {formattedTotalBudget <= 0.01
          ? formattedTotalBudget.substring(1)
          : formattedTotalBudget}{' '}
      </h2>
      <Zoom>
        <div className="income-expense">
          <div className="plus">
            <h3>Income</h3>
            <p>${formattedTotalIncome}</p>
          </div>
          <div className="minus">
            <h3> Expense</h3>
            <p>-${formattedTotalExpense}</p>
          </div>
        </div>{' '}
      </Zoom>
    </div>
  );
};

export default Balance;
