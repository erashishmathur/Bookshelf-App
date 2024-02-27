import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/users/usersActions";
const UpdateProfile = () => {
  // pre populate the existing user from our store
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const { userInfo } = userLogin;
  //   console.log(userInfo);

  const [name, setname] = useState(userInfo?.name);
  const [email, setemail] = useState(userInfo?.email);
  const [password, setpassword] = useState("");

  const updatedUser = useSelector((state) => state.updatedUser);
  const { loading, error } = updatedUser;
  // dispatch action
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(name, email, password));
  };
  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {error && <h1>{error}</h1>}

          {loading && <h1>Loading...</h1>}
          <h1 className="text-center">Update</h1>
          <form onSubmit={handleFormSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary m-auto">
                Update your profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
