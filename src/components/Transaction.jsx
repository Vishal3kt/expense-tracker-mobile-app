import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const Transaction = ({ ele }) => {
  const { deleteTransaction } = useContext(GlobalState);

  const sign = ele.amount < 0 ? "-" : "+";

  return (
    <AnimatePresence key={ele.id}>
      <motion.li
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          x: -100,
          opacity: 0,
          transition: { duration: 0.1 },
        }}
        transition={{ type: "spring", stiffness: 350 }}
        className={ele.amount > 0 ? "plus" : "minus"}
      >
        {ele.text}
        <span>
          {sign} ${Math.abs(ele.amount)}
        </span>
        <button
          onClick={() => {
            deleteTransaction(ele.id);
          }}
          className="delete-btn"
        >
          x
        </button>
      </motion.li>
    </AnimatePresence>
  );
};

export default Transaction;
