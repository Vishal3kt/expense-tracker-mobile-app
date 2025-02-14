import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalState);

  const amount = transactions.map((ele) => ele.amount);

  const income = amount
    .filter((ele) => ele > 0)
    .reduce((acc, ele) => (acc += ele), 0)
    .toFixed(2);

  const expense = (
    amount.filter((ele) => ele < 0).reduce((acc, ele) => (acc += ele), 0) * -1
  ).toFixed(2);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350 }}
      >
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p className="money plus">${income}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className="money minus">${expense}</p>
          </div>
        </div>
      </motion.div>

      <h3 style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div>Add Income</div>
      </h3>

      <AnimatePresence>
        <motion.div
          key="add-income-input"
          className="input-wrapper"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
        >
          <input
            className="input-field"
            type="number"
            placeholder="Enter amount..."
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default IncomeExpenses;
