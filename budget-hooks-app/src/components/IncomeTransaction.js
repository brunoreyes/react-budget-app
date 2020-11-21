import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// using props to pass incomeTransaction and place it in {} to destructure it
const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction, findIncome } = useContext(GlobalContext);
  // const { deleteTransaction, editTransaction } = useContext(GlobalContext);

  // const [editTransaction, setEditTransaction] = useState(null);

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
          onClick={() => findIncome(incomeTransaction)}
        >
          <i className="fas fa-pen"></i>
        </button>
        {/* {JSON.stringify(incomeTransaction)} */}
      </li>
    </div>
  );
};

export default IncomeTransaction;
