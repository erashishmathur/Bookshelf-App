import React, { useEffect } from "react";
import "./Profile.css";
import pic from "../../assets/Img/bookpic.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../redux/actions/users/usersActions";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;
  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <div className="card m-auto " style={{ width: "50%" }}>
                <img src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{user?.email}</h5>
                  <p className="card-text">{user?.name}</p>
                  <Link to="/user-update" className="btn btn-primary">
                    Update your profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {loading ? (
        <h1>Loading please wait</h1>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Book Name</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {user?.books.map((book) => (
              <tr className="table-dark">
                <th scope="row">{book.author}</th>
                <td>{book.title}</td>
                <td>Delete</td>
                <td>Update</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Profile;
