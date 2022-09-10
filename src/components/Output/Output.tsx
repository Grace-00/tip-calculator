import "./Output.css";

import React from "react";
import {
  getTipAmount,
  getTotalPerPerson,
  isEmpty,
  usePrevious,
} from "../../utils";

interface OutputProps {
  bill: string;
  numberOfPeople: string;
  customTip: number | string;
  regularTip: number | string;
  reset?: () => void;
}

const Output = (props: OutputProps) => {
  const { bill, numberOfPeople, customTip, regularTip, reset } = props;

  const getOutputTip = () => {
    const outputTotalPerPerson = getTotalPerPerson(+bill, +numberOfPeople);
    const tipAmount = getTipAmount(
      getTotalPerPerson(+bill, +numberOfPeople),
      +customTip || +regularTip
    );
    const prevNumberOfPeople = usePrevious(+numberOfPeople);

    if (
      !outputTotalPerPerson ||
      !(+customTip || +regularTip) ||
      +numberOfPeople !== prevNumberOfPeople
    ) {
      return;
    }

    return tipAmount.toFixed(2);
  };

  return (
    <div className="output-wrapper">
      <div className="output-tip">
        <div className="output-text">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div className="output-value">
          <p>${getOutputTip() || "00.00"}</p>
        </div>
      </div>
      <div className="output-total">
        <div className="output-text">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div className="output-value">
          <p>${getTotalPerPerson(+bill, +numberOfPeople) || "00.00"}</p>
        </div>
      </div>
      <button
        className="output-btn"
        onClick={reset}
        disabled={isEmpty(bill || +customTip || +regularTip || numberOfPeople)}
      >
        reset
      </button>
    </div>
  );
};

export default Output;
