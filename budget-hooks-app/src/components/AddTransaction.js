// creating a new state which will be the local state of the component
import React, { useState } from 'react';

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <form>
        <div className="input-group income">
          <input type="text" placeholder="Income Name" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Expense Name" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
