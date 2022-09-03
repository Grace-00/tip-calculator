import "./TipSelector.css";

import React from "react";
export interface tipBtn {
  regularTip: number;
  type: string;
}

interface TipSelectorProps {
  id: string;
  tipBtn: tipBtn;
  handleValueUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TipSelector = (props: TipSelectorProps) => {
  const { id, tipBtn, handleValueUpdate } = props;

  return (
    <>
      <button
        className="tip-selector-btn"
        onClick={handleValueUpdate}
        id={id}
      >{`${tipBtn.regularTip + "%"}`}</button>
    </>
  );
};

export default TipSelector;
