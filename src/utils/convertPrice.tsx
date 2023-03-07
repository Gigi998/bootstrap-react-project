export const convertPrice = (price: string) => {
  return parseFloat(`${price.slice(0, 1)}${price.slice(2)}`);
};
