import React, { useContext } from 'react';
// to use context, I have to import useContext, a react hook
import { GlobalContext } from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

const IncomeList = () => {
  // destructuring incomeTransactions from GlobalContext
  // using useContext hooks
  const { incomeTransactions } = useContext(GlobalContext);
  //   console.log(incomeTransactions);
  return (
    <div className="transactions transactions-income">
      {/* <h2>Income</h2> */}
      <ul className="transaction-list-income">
        {incomeTransactions.map((incomeTransaction) => (
          // passing income transaction data
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
