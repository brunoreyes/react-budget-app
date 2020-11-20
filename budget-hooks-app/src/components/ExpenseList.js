import React, { useContext } from 'react';
// to use context, I have to import useContext, a react hook
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseList = () => {
  // destructuring expenseTransactions from GlobalContext
  // using useContext hooks
  const { expenseTransactions } = useContext(GlobalContext);
  //   console.log(expenseTransactions);
  return (
    <div className="transactions transactions-expense">
      <h2>Expenses</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          // passing expense transaction data
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
