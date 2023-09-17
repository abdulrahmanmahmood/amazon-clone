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
      case "SET_PRODUCT":
      return {
        ...state,
        basket: action.user,
      };
    default:
      return state;
  }
};

export default AppReducer;
