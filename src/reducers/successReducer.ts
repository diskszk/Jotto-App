import { actionTypes } from "../actions";

export default (state: boolean = false, action: any) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
};
