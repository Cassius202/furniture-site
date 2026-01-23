export const Rounder = (number, i = 1) => {
  let multiplier = 1 / i;

  let workVal = number * multiplier;
  return Math.round(workVal) * i;
};
