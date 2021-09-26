import { userConstants } from "./constants";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userConstants.GOOGLE_SIGN_IN_START:
    case userConstants.SIGN_UP_START:
    case userConstants.EMAIL_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case userConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false,
      };
    case userConstants.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case userConstants.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
      };
    case userConstants.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
