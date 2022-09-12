import "./Output.css"

import React from "react"
import {
  getTipAmount,
  getTotalPerPerson,
  isEmpty
} from "../../utils"

interface OutputProps {
  bill: string
  numberOfPeople: string
  customTip: number | string
  regularTip: number | string
  reset?: () => void
}

const Output = (props: OutputProps) => {
  const { bill, numberOfPeople, customTip, regularTip, reset } = props

  const getOutputTip = () => {
    const tipAmount = getTipAmount(
      getTotalPerPerson(+bill, +numberOfPeople),
      +customTip || +regularTip
    )
    return tipAmount ? tipAmount.toFixed(2) : '00.00'
  }

  const getOutputTotalPerPerson = () => {
    const outputTotalPerPerson = getTotalPerPerson(+bill, +numberOfPeople)
    const tipAmount = getTipAmount(
      getTotalPerPerson(+bill, +numberOfPeople),
      +customTip || +regularTip
    )
    return (outputTotalPerPerson + tipAmount) ? (outputTotalPerPerson + tipAmount).toFixed(2) : '00.00'
  }

  return (
    <div className="output-wrapper">
      <div className="output-tip">
        <div className="output-text">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div className="output-value">
          <p>${getOutputTip()}</p>
        </div>
      </div>
      <div className="output-total">
        <div className="output-text">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div className="output-value">
          <p>${getOutputTotalPerPerson()}</p>
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
  )
}

export default Output
