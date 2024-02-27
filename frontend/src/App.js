import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./components/Books/AddBook";
import Navbar from "./components/Navbars/Navbars";
import Books from "./components/Books/Books";
import RegisterUser from "./components/users/RegisterUser";
import LoginUser from "./components/users/LoginUser";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/Profile/UpdateProfile";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes
          value={{
            push: (to) => window.history.pushState({}, "", to),
            replace: (to) => window.history.replaceState({}, "", to),
            goBack: () => window.history.back(),
            // ... other history methods
          }}
        >
          <Route exact path="/login" Component={LoginUser}></Route>
          <Route exact path="/profile" Component={Profile}></Route>
          <Route exact path="/user-update" Component={UpdateProfile}></Route>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/books" Component={Books}></Route>
          <Route exact path="/addbook" Component={AddBook}></Route>

          <Route exact path="/register" Component={RegisterUser}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
