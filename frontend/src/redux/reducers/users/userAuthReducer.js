import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../../actions/actionTypes";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};
const userReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case USER_REGISTER_SUCCESS:
      return {
        userInfo: action.payload,
      };

    case USER_REGISTER_FAIL:
      return {
        error: action.payload,
        loading: false,
      };

    //Login
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export { userReducer };
