const initialState = {
  basket:[],
  user:null,

}
const AppReducer = (state = initialState, action) => {
switch(action.type){
  case "SET_USER":
    return{
      ...state,
      user:action.user
    }
}; 

export default AppReducer