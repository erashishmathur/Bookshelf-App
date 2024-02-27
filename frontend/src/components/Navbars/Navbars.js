import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAction } from "../../redux/actions/users/usersActions";

const Navbar = () => {
  const state = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    window.history.pushState([], "/");
  };
  const { userInfo, loading, error } = state;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          BS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {!userInfo ? (
              <>
                <Link className="nav-link" to="/AboutUs">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-toggle="modal"
                    data-target="#about"
                  >
                    About
                  </button>
                </Link>
                {error && <h2>{error}</h2>}
                {loading ? (
                  <h3>Loading</h3>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}

                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-secondary my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/books">
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addbook">
                    Add book
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={logoutHandler}
                    className="nav-link"
                    href="/login"
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
