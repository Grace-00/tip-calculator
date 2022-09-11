import "./Input.css"

import React, { FC, useState } from "react"
import Label, { LabelText } from "../Label/Label"

type Currency = string | number;

interface InputProps {
  id: string
  type: string
  placeholder: string
  numPeople?: string
  value: Currency
  handleValueUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  label?: LabelText
}

const Input: FC<InputProps> = ({
  type,
  value,
  placeholder,
  id,
  handleValueUpdate,
  className,
  label,
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const [onBlur, setOnBlur] = useState(false)

  const handleOnFocus = () => {
    setOnFocus(!onFocus)
  }
  const handleOnBlur = () => {
    setOnBlur(!onBlur)
  }
  const isValue0 =
    className === "input number-people" && onFocus && value === "0"

  return (
    <div className={isValue0 ? "input number-people alert" : `${className}`}>
      { /* eslint-disable @typescript-eslint/no-non-null-assertion */ }
      <Label label={label!} />
      {isValue0 && <span className="span-alert">Can't be zero</span>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onWheel={(event) => event.currentTarget.blur()}
        onChange={handleValueUpdate}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  )
}

export default Input
