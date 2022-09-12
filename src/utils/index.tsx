export const isEmpty = (str: string | number): boolean => {
  return str === ""
}

export const getTotalPerPerson = (bill: number, numPeople: number): number => {
  return numPeople > 0 && Number.isInteger(numPeople)
    ? +(bill / numPeople).toFixed(2)
    : 0
}

export const getTipAmount = (totalPerPerson: number, tip: number): number => {
  return (totalPerPerson / 100) * tip
}
