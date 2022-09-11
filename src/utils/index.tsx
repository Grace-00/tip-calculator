import { useEffect, useRef } from "react"

export const isEmpty = (str: string | number): boolean => {
  return str === ""
}

export const getTotalPerPerson = (bill: number, numPeople: number): number => {
  return numPeople > 0 && Number.isInteger(numPeople)
    ? +(bill / numPeople).toFixed(2)
    : 0
}

export const getTipAmount = (
  totalPerPerson: number,
  tip: number
): number => {
  return (totalPerPerson / 100) * tip
}

type NumOfPeople = number;
export const usePrevious = (value: NumOfPeople): NumOfPeople | undefined => {
  const ref = useRef<NumOfPeople>()
  useEffect(() => {
    ref.current = value //assign the value of ref to the argument
  }, [value]) //this code will run when the value of 'value' changes
  return ref.current //in the end, return the current ref value.
}
