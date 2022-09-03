import React from "react";

export enum LabelText {
  Regular = "Regular",
  Bill = "Bill",
  NumberOfPeople = "Number of People",
  Custom = "Custom",
  SelectTip = "Select Tip %",
}

interface LabelProps {
  readonly label: LabelText;
}

const Label = (props: LabelProps) => {
  return <label className="tip-selector-label">{props.label}</label>;
};

export default Label;
