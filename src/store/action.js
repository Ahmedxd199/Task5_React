export const addToCart = (itemId) => {
  return {
    type: "ADD_TO_CART",
    itemId,
  };
};

export const delFromCart = (itemId) => {
  return {
    type: "DEL_FROM_CART",
    itemId
  };
};
