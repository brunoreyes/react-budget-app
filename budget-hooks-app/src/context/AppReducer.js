export default (state, action) => {
  switch (action.type) {
    // if the action type matches, we return the spreaded state
    case 'ADD_INCOME':
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        // in order to delete a transaction, use a filter (an array helper method)
        //   looping through incomeTransactions and returning a filtered array.
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };
    // case 'READ_INCOME':
    //   return {
    //     ...state,
    //     incomeTransactions: state.incomeTransactions.filter(
    //       (incomeTransaction) => incomeTransaction.id === action.payload
    //     ),
    //   };

    case 'UPDATE_INCOME':
      console.log(action);

      // state.incomeTransactions[action.payload].incomeName = action.incomeName;
      // state.incomeTransactions[action.payload].incomeAmount =
      //   action.incomeAmount;

      return {
        ...state,
        incomeTransactions: state.incomeTransactions.map(
          (incomeTransaction) => {
            if (incomeTransaction.id === action.payload) {
              const updatedItem = {
                ...incomeTransaction,
                incomeAmount: action.incomeAmountNumber,
                incomeName: action.incomeName,
              };
              return updatedItem;
            }
            return incomeTransaction;
          }
        ),
      };

    default:
      return state;
  }
};
