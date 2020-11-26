import React, { useContext } from 'react';
// to use context, I have to import useContext, a react hook
import { GlobalContext } from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';
import Fade from 'react-reveal/Fade';

const IncomeList = () => {
  // destructuring incomeTransactions from GlobalContext
  // using useContext hooks
  const { incomeTransactions } = useContext(GlobalContext);
  //   console.log(incomeTransactions);
  return (
    <div className="transactions transactions-income">
      <ul className="transaction-list-income">
        {/* // passing income transaction data */}{' '}
        {incomeTransactions.map((incomeTransaction) => (
          <Fade>
            <IncomeTransaction
              key={incomeTransaction.id}
              incomeTransaction={incomeTransaction}
            />{' '}
          </Fade>
        ))}{' '}
      </ul>
    </div>
  );
};

export default IncomeList;
