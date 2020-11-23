// creating a new state which will be the local state of the component
import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// importing in order to addIncome function from GlobalContext
import { GlobalContext } from '../context/GlobalState';

const TransactionForm = () => {
  //gathering functions from GlobalContext
  const {
    addIncome,
    addExpense,
    editIncome,
    editExpense,
    editIncomeTransaction,
    editExpenseTransaction,
  } = useContext(GlobalContext);

  // creating a new state by using array destructuring
  //  variable   function     hook        value
  const [income, setIncome] = useState({
    incomeName: '',
    incomeAmount: '',
  });

  const [expense, setExpense] = useState({
    expenseName: '',
    expenseAmount: '',
  });

  // destructuring properties from the income object
  const { incomeName, incomeAmount } = income;
  const { expenseName, expenseAmount } = expense;

  const onSubmitIncome = (e) => {
    // e.preventDefault method ensures the submit btn doesn't reload the pg, like it normally would.
    e.preventDefault();

    if (editIncomeTransaction) {
      // console.log(editIncomeTransaction);
      // make sure to multiply by 1 again to avoid string parsing errors
      const incomeAmountNumber = incomeAmount * 1;
      editIncome(incomeName, incomeAmountNumber, editIncomeTransaction);
      console.log(incomeName, incomeAmount);
      setIncome({ incomeName: '', incomeAmount: '' });
    } else if (incomeName || incomeAmount !== '') {
      const newIncomeTransaction = {
        // uuid is an npm pkg that autogenerates unique ids for each newly created object, installed via: npm i uuid
        id: uuidv4(),
        // thanks to es6, if the property and value are the same, we can write the value ones
        //  so incomeText instead of incomeText: income.incomeText,
        incomeName,
        //   multiplying a string by 1 will convert a string number into just a number (change string to an int)
        incomeAmount: incomeAmount * 1,
      }; // console.log(newIncomeTransaction);
      addIncome(newIncomeTransaction);
      // setting the input values back to empty after inputted values have been submitted
      setIncome({ incomeName: '', incomeAmount: '' });
    }
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (editExpenseTransaction) {
      const expenseAmountNumber = expenseAmount * 1;
      editExpense(expenseName, expenseAmountNumber, editExpenseTransaction);
      setExpense({ expenseName: '', expenseAmount: '' });
    } else if (expenseName || expenseAmount !== '') {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseName,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);
      setExpense({ expenseName: '', expenseAmount: '' });
    }
  };

  // function that uses set income method
  const onChangeIncome = (e) => {
    // accessing the exact property name with [] and assigning it a value
    // to keep both properties (incomeText & incomeAmount) spread out the income object via "...income"
    setIncome({ ...income, [e.target.name]: e.target.value });
    // console.log(income);
  };

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  // changing the input fields value to whichever transaction is choosen to edit.
  useEffect(() => {
    if (editIncomeTransaction) {
      setIncome({
        incomeName: editIncomeTransaction.incomeName,
        incomeAmount: editIncomeTransaction.incomeAmount,
      });
      console.log(editIncomeTransaction);
    } else {
      setIncome('');
    }
  }, [editIncomeTransaction]);

  useEffect(() => {
    if (editExpenseTransaction) {
      setExpense({
        expenseName: editExpenseTransaction.expenseName,
        expenseAmount: editExpenseTransaction.expenseAmount,
      });
    } else {
      setExpense('');
    }
  }, [editExpenseTransaction]);

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeName || ''}
            // name of the attribute should match the name of the property of the income object
            name="incomeName"
            placeholder="Income Name *"
            autoComplete="off"
            required
            onChange={onChangeIncome}
          />
          <input
            type="number"
            value={incomeAmount || ''}
            // name of the attribute should match the name of the property of the income object
            name="incomeAmount"
            placeholder="00.00 *"
            autoComplete="off"
            required
            onChange={onChangeIncome}
          />{' '}
          {/* TODO: input date for transactions here */}
          {/* <input
            type="number"
            value={expenseAmount}
            placeholder="Date (Optional)"
            name="expenseAmount"
            onChange={onChangeExpense}
            autoComplete="off"
          /> */}
          {/* only when info has been submitted will a unique id be generated by uuidv4 */}
          {editIncomeTransaction ? <i className="fas fa-pen"></i> : <></>}
          <input
            type="submit"
            // preventative measure to avoid crashing the program due to a NaN input
            disabled={
              incomeName && incomeAmount && incomeAmount >= 0.01
                ? false
                : 'disabled'
            }
            value={editIncomeTransaction ? '     Income' : '+ Income'}
          ></input>{' '}
          <p aria-hidden="true" id="required-description">
            {/* <span className="required">*</span>Required field */}
          </p>
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            value={expenseName || ''}
            name="expenseName"
            placeholder="Expense Name *"
            autoComplete="off"
            required
            onChange={onChangeExpense}
          />
          <input
            type="number"
            value={expenseAmount || ''}
            placeholder="00.00 *"
            name="expenseAmount "
            required
            onChange={onChangeExpense}
            autoComplete="off"
          />
          {/* <input
            type="number"
            value={expenseAmount}
            placeholder="Date (Optional)"
            name="expenseAmount"
            onChange={onChangeExpense}
            autoComplete="off"
          /> */}
          {editExpenseTransaction ? <i className="fas fa-pen"></i> : <></>}
          <input
            type="submit"
            disabled={
              expenseName && expenseAmount && expenseAmount >= 0.01
                ? false
                : 'disabled'
            }
            value={editExpenseTransaction ? '     Expense' : '+ Expense'}
          ></input>{' '}
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
