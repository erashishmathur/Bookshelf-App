import {
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
} from "../../actions/actionTypes";

const deleteBookReducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_BOOK_REQUEST:
      return {
        loading: true,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        books: action.payload,
      };
    case DELETE_BOOK_FAIL:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export { deleteBookReducer };
