import axios from "axios";
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
} from "../actionTypes";

const createBookAction = (bookData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
      });
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post("/api/books", bookData, config);

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

// fetch all books action
const fetchBooksAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_BOOK_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make http call to our backend
      const { data } = await axios.get("/api/books", config);
      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

// delete books action
const deleteBookAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make http call to our backend
      const { data } = await axios.get("/api/books", config);
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};
export { createBookAction, fetchBooksAction, deleteBookAction };
