import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalState);

  return (
    <div>
      <div className="btn-wrapper">
        <h3
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <div>History</div>
        </h3>
      </div>
      <AnimatePresence mode="wait">
        <motion.ul exit={{ x: -100, opacity: 0 }} className="list">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              x: -100,
              opacity: 0,
              transition: { duration: 0.1 },
            }}
            style={{ textAlign: "center" }}
          >
            {transactions.length < 1 ? "No data" : ""}
          </motion.div>
          {transactions.map((ele) => {
            return <Transaction key={ele.id} ele={ele} />;
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default TransactionList;
