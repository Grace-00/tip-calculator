import React, { useState } from "react"
import Header from "./components/Header/Header"
import Input from "./components/Input/Input"
import Label, { LabelText } from "./components/Label/Label"
import Output from "./components/Output/Output"
import RegularTipSelector from "./components/RegularTipSelector/RegularTipSelector"

type typeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;

const EntryPoint = () => {
  const [bill, setBill] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [regularTip, setRegularTip] = useState("")
  const [customTip, setCustomTip] = useState("")

  const onValueUpdate = (e: typeEvent) => {
    const userInput = (e.currentTarget as HTMLInputElement).value
    const targetId = (e.currentTarget as Element).id
    const regularTip = e.currentTarget.innerText.slice(0, -1)

    switch (targetId) {
      case LabelText.Bill:
        return +userInput < 0 ? 0 : setBill(userInput)
      case LabelText.NumberOfPeople:
        return +userInput < 0 ? 0 : setNumberOfPeople(userInput)
      case LabelText.Custom:
        return setCustomTip(userInput)
      case LabelText.Regular:
        return setRegularTip(regularTip)
    }
  }

  const reset = () => {
    setBill("")
    setNumberOfPeople("")
    setCustomTip("")
    setRegularTip("")
  }

  return (
    <>
      <Header />
      <div className="app">
        <div className="app-wrapper">
          <div className="form-wrapper">
            <Input
              type="number"
              id={LabelText.Bill}
              label={LabelText.Bill}
              value={bill}
              placeholder="0"
              handleValueUpdate={onValueUpdate}
              className="input bill"
            />
            <div className="tip-selector-container">
              <Label label={LabelText.SelectTip} />
              <div className="tip-selector-wrapper">
                <RegularTipSelector
                  tipBtns={[5, 10, 15, 25, 50]}
                  id={LabelText.Regular}
                  handleValueUpdate={onValueUpdate}
                />
                <Input
                  type="number"
                  placeholder="Custom"
                  id={LabelText.Custom}
                  value={LabelText.Custom ? customTip : regularTip}
                  handleValueUpdate={onValueUpdate}
                  className="input custom-bill"
                />
              </div>
            </div>
            <Input
              type="number"
              placeholder="Number of people"
              id={LabelText.NumberOfPeople}
              label={LabelText.NumberOfPeople}
              value={numberOfPeople}
              handleValueUpdate={onValueUpdate}
              className="input number-people"
            />
          </div>
          <Output
            bill={bill}
            numberOfPeople={numberOfPeople}
            customTip={customTip}
            regularTip={regularTip}
            reset={reset}
          />
        </div>
      </div>
    </>
  )
}

export default EntryPoint
