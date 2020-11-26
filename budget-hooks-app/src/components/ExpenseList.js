import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';
import Fade from 'react-reveal/Fade';

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <ul className="transaction-list">
        {' '}
        {expenseTransactions.map((expenseTransaction) => (
          <Fade>
            <ExpenseTransaction
              key={expenseTransaction.id}
              expenseTransaction={expenseTransaction}
            />{' '}
          </Fade>
        ))}{' '}
      </ul>
    </div>
  );
};

export default ExpenseList;
