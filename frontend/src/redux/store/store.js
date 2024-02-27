import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createBookReducer } from "../reducers/books/createBookReducer";
import { bookListReducer } from "../reducers/books/bookListReducer";
import { userReducer } from "../reducers/users/userAuthReducer";
import { userProfileReducer } from "../reducers/users/userProfileReducer";
import updateUserProfile from "../reducers/users/updateUserProfile";
import { deleteBookReducer } from "../reducers/books/deleteBookReducer";
const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  userLogin: userReducer,
  userProfile: userProfileReducer,
  updatedUser: updateUserProfile,
  deleteBook: deleteBookReducer,
});

// Get user from localstorage and save it into our store

const userAuthFromStorage = localStorage.getItem("userAuthData")
  ? JSON.parse(localStorage.getItem("userAuthData"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userAuthFromStorage,
  },
};
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store, initialState };
