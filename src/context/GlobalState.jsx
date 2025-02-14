import { createContext, useReducer } from "react";

export const initialValue = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalState = createContext(initialValue);

const reducer = (state, action) => {
  switch (action.type) {
    case "Delete":
      return {
        ...state,
        transactions: state.transactions.filter(
          (ele) => ele.id !== action.payload
        ),
      };
    case "Add":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const deleteTransaction = (id) => {
    dispatch({
      type: "Delete",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "Add",
      payload: transaction,
    });
  };

  return (
    <GlobalState.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
