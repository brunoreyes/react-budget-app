import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  // grabbing all of the previous income and expense amounts and mapping them out
  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
    // (incomeTransaction) => parseFloat(incomeTransaction.incomeAmount)
    // to convert a string into a number, use parseFloat()
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  // passing and taking in to arguments, the acc (accumulator) and current income amount
  // then we are adding the acc to the current income amount, producing the new current income amount
  // 0 is adding 0 additioanl value to the income, .toFixed add fixed decimals
  const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0);
  // .toFixed(2);
  const totalExpense = expenseAmounts.reduce((acc, item) => (acc += item), 0);
  // .toFixed(2);
  return (
    <div className="balance">
      <h2>
        {(totalIncome - totalExpense).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </h2>
      {/* had to place "totalIncome - totalExpense" in parenthesis to use .toFixed helper method
          to have a set decimal value of 2  */}
      {/* <h3> ${(totalIncome - totalExpense).toFixed(2)}</h3> */}
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>
            +
            {totalIncome.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>
            –
            {totalExpense.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
