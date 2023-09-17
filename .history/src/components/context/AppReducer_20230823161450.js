import { act } from "react-dom/test-utils";

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
        basket: [act],
      };
    default:
      return state;
  }
};

export default AppReducer;
