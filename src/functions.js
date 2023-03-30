export const numbersOnly = (inputString = "") => {
  return inputString.replace(/\D/g, "");
}
