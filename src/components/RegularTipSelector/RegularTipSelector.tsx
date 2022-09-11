import React from "react"
import "./RegularTipSelector.css"

interface TipSelectorProps {
  id: string
  tipBtns: number[]
  handleValueUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TipSelector = (props: TipSelectorProps) => {
  const { id, tipBtns, handleValueUpdate } = props

  return (
    <>
      {tipBtns.map((tipBtn) => {
        return (
          <button
            className="tip-selector-btn"
            onClick={handleValueUpdate}
            key={id}
          >{`${tipBtn + "%"}`}</button>
        )
      })}
    </>
  )
}

export default TipSelector
