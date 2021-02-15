const USERINPUT = "USERINPUT";
const initialState = "SUP";

const userInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINPUT:
      return action.userInput;
    default:
      return state;
  }
};

export default userInputReducer;
