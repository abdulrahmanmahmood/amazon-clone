export const getBasketTotal=(basket)=>{
basket.reduce((amount,item)=>{
  return amount + item.price;
},0)
};

export const initialState = {
  basket: [],
  user: null,
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket,action.item],
      };
    default:
      return state;
  }
};

export default AppReducer;