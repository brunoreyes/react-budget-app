// creating a new state which will be the local state of the component
import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';
import Fade from 'react-reveal/Fade';

const TransactionForm = () => {
  //gathering functions from GlobalContext
  const {
    addIncome,
    addExpense,
    editIncome,
    editExpense,
    editIncomeTransaction,
    editExpenseTransaction,
    incomeTransactions,
    expenseTransactions,
  } = useContext(GlobalContext);

  // creating a new state by using array destructuring
  //  variable   function     hook        value
  const [income, setIncome] = useState({
    incomeName: '',
    incomeAmount: '',
    incomeDate: '',
  });

  const [expense, setExpense] = useState({
    expenseName: '',
    expenseAmount: '',
    expenseDate: '',
  });

  // destructuring properties from the income object
  const { incomeName, incomeAmount, incomeDate } = income;
  const { expenseName, expenseAmount, expenseDate } = expense;

  const onSubmitIncome = (e) => {
    // e.preventDefault method ensures the submit btn doesn't reload the pg, like it normally would.
    e.preventDefault();

    if (editIncomeTransaction) {
      // make sure to multiply by 1 again to avoid string parsing errors
      const incomeAmountNumber = incomeAmount * 1;
      editIncome(
        incomeName,
        incomeAmountNumber,
        editIncomeTransaction,
        incomeDate
      );
      // console.log(incomeName, incomeAmount);
      setIncome({ incomeName: '', incomeAmount: '', incomeDate: '' });
    } else if (incomeName || incomeAmount !== '') {
      const newIncomeTransaction = {
        // uuid is an npm pkg that autogenerates unique ids for each newly created object, installed via: npm i uuid
        id: uuidv4(),
        // thanks to es6, if the property and value are the same, we can write the value ones
        //  so incomeText instead of incomeText: income.incomeText,
        incomeName,
        //   multiplying a string by 1 will convert a string number into just a number (change string to an int)
        incomeAmount: incomeAmount * 1,
        incomeDate,
      };
      addIncome(newIncomeTransaction);
      // setting the input values back to empty after inputted values have been submitted
      setIncome({ incomeName: '', incomeAmount: '', incomeDate: '' });
    }
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (editExpenseTransaction) {
      const expenseAmountNumber = expenseAmount * 1;
      editExpense(
        expenseName,
        expenseAmountNumber,
        editExpenseTransaction,
        expenseDate
      );
      setExpense({ expenseName: '', expenseAmount: '', expenseDate: '' });
    } else if (expenseName || expenseAmount !== '') {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseName,
        expenseAmount: expenseAmount * 1,
        expenseDate,
      };
      addExpense(newExpenseTransaction);
      setExpense({ expenseName: '', expenseAmount: '', expenseDate: '' });
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
        incomeDate: editIncomeTransaction.incomeDate,
      });
    } else {
      setIncome('');
    }
  }, [editIncomeTransaction]);

  useEffect(() => {
    if (editExpenseTransaction) {
      setExpense({
        expenseName: editExpenseTransaction.expenseName,
        expenseAmount: editExpenseTransaction.expenseAmount,
        expenseDate: editExpenseTransaction.expenseDate,
      });
    } else {
      setExpense('');
    }
  }, [editExpenseTransaction]);

  const checkIncomeNameDuplicate = (parameter) => {
    let index = incomeTransactions.findIndex(
      (item) => item.incomeName.toLowerCase() === parameter
    );
    return index >= 0;
  };
  const checkExpenseNameDuplicate = (parameter) => {
    let index = expenseTransactions.findIndex(
      (item) => item.expenseName.toLowerCase() === parameter
    );
    return index >= 0;
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeName || ''}
            // name of the attribute should match the name of the property of the income object
            name="incomeName"
            id="input-incomeName"
            placeholder="Income Name *"
            autoComplete="off"
            required
            onChange={onChangeIncome}
          />{' '}
          {incomeName &&
          !editIncomeTransaction &&
          checkIncomeNameDuplicate(incomeName.toLowerCase()) ? (
            <Fade>
              <p aria-hidden="true" className="required-description-unique">
                <span className="required">* </span>Must provide a unique name
              </p>
            </Fade>
          ) : (
            <></>
          )}
          <input
            type="number"
            value={incomeAmount || ''}
            // name of the attribute should match the name of the property of the income object
            name="incomeAmount"
            placeholder="00.00 *"
            autoComplete="off"
            required
            // min={0.01}
            onChange={onChangeIncome}
          />{' '}
          {incomeAmount && incomeAmount < 0.01 ? (
            <Fade>
              <p aria-hidden="true" className="required-description-amount">
                <span className="required">* </span>Value must me greater than
                or equal to .01
              </p>
            </Fade>
          ) : (
            <></>
          )}
          <label
            style={
              incomeDate
                ? document.getElementById('date-input-income').value === '' ||
                  null
                  ? { color: '#000' }
                  : { color: '#000' }
                : { color: '#d3d3d3' }
            }
            className="date-label"
            htmlFor="incomeDate"
          >
            Expected By
          </label>
          <input
            className="date-input"
            id="date-input-income"
            type="date"
            value={incomeDate || ''}
            style={
              incomeDate
                ? document.getElementById('date-input-expense').value === ''
                  ? { color: '#000' }
                  : { color: '#000' }
                : { color: '#d3d3d3' }
            }
            name="incomeDate"
            onChange={onChangeIncome}
            autoComplete="off"
          />{' '}
          <p aria-hidden="true" className="required-description">
            <span className="required">* </span>
            Required
          </p>{' '}
          {/* only when info has been submitted will a unique id be generated by uuidv4 */}
          {editIncomeTransaction ? <i className="fas fa-pen"></i> : <></>}{' '}
          <input
            type="submit"
            // preventative measure to avoid crashing the program due to a NaN input
            disabled={
              incomeName &&
              incomeAmount &&
              incomeAmount >= 0.01 &&
              (editIncomeTransaction ||
                !checkIncomeNameDuplicate(incomeName.toLowerCase()))
                ? false
                : 'disabled'
            }
            value={editIncomeTransaction ? '   Income' : '+ Income'}
          ></input>{' '}
        </div>
        {incomeName
          ? checkIncomeNameDuplicate(
              document.getElementById('input-incomeName').value
            )
          : ''}
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseName"
            value={expenseName || ''}
            placeholder="Expense Name *"
            autoComplete="off"
            required
            onChange={onChangeExpense}
          />{' '}
          {expenseName &&
          !editExpenseTransaction &&
          checkExpenseNameDuplicate(expenseName.toLowerCase()) ? (
            <Fade>
              <p aria-hidden="true" className="required-description-unique">
                <span className="required">* </span>Must provide a unique name
              </p>
            </Fade>
          ) : (
            <></>
          )}
          <input
            type="number"
            value={expenseAmount || ''}
            placeholder="00.00 *"
            name="expenseAmount"
            required
            onChange={onChangeExpense}
            autoComplete="off"
            disabled={0}
            // min={0.01}
          />
          {expenseAmount && expenseAmount < 0.01 ? (
            <Fade>
              <p aria-hidden="true" className="required-description-amount">
                <span className="required">* </span>Value must me greater than
                or equal to .01
              </p>
            </Fade>
          ) : (
            <></>
          )}
          <label
            className="date-label"
            htmlFor="incomeDate"
            style={
              expenseDate
                ? document.getElementById('date-input-expense').value === ''
                  ? { color: '#000' }
                  : { color: '#000' }
                : { color: '#d3d3d3' }
            }
          >
            Due By
          </label>
          <input
            className="date-input"
            id="date-input-expense"
            type="date"
            value={expenseDate || ''}
            style={
              expenseDate
                ? document.getElementById('date-input-expense').value === ''
                  ? { color: '#000' }
                  : { color: '#000' }
                : { color: '#d3d3d3' }
            }
            name="expenseDate"
            onChange={onChangeExpense}
            autoComplete="off"
            disabled={0}
          />{' '}
          <p aria-hidden="true" className="required-description">
            <span className="required">* </span>Required
          </p>
          {editExpenseTransaction ? <i className="fas fa-pen"></i> : <></>}
          <input
            type="submit"
            disabled={
              expenseName &&
              expenseAmount &&
              expenseAmount >= 0.01 &&
              (editExpenseTransaction ||
                !checkExpenseNameDuplicate(expenseName.toLowerCase()))
                ? false
                : 'disabled'
            }
            value={editExpenseTransaction ? '   Expense' : '+ Expense'}
          ></input>{' '}
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
