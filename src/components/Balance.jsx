import React, { useContext, useEffect, useRef } from "react";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";
import { GlobalState } from "../context/GlobalState";

const Balance = () => {
  const odometerRef = useRef(null);
  const { transactions } = useContext(GlobalState);

  const amount = transactions.map((ele) => {
    return ele.amount;
  });

  const totalAmount = amount
    .reduce((acc, ele) => {
      return (acc = acc + ele);
    }, 0)
    .toFixed(2);

  useEffect(() => {
    if (odometerRef.current) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 0,
        theme: "default",
      });

      odometer.update("");
    }
  }, []);

  return (
    <div>
      <h4>Your Balance</h4>
      <div className="btn-meter">
        <h1 className="odometer">${totalAmount}</h1>
      </div>
    </div>
  );
};

export default Balance;
