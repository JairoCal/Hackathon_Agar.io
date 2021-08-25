import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignUpForm";
import { showModal, setCurrentModal } from "../../store/modal";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const showLogin = () => {
    dispatch(setCurrentModal(LoginForm));
    dispatch(showModal());
  };

  const showSignup = () => {
    dispatch(setCurrentModal(SignupForm));
    dispatch(showModal());
  };

  return (
    <div className="navbar">
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
      </div>
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      )}
      {!user && (
        <div className="userButtons">
          <div>
            <a onClick={showLogin}>Login</a>
          </div>
          <div>
            <a onClick={showSignup}>Signup</a>
          </div>
        </div>
      )}
      {user && (
        <div className="userInfo">
          <div>
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
