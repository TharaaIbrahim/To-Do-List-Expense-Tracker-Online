import React from "react";
import { Link } from "react-router-dom";
import API from "../API/API";
import "./Nav.css";

function Nav({ logged, setLogged }) {
  const logoutHandler = () => {
    setLogged(false);
  };
  return (
    <nav className="nav">
      <Link className="logo" to="/">
        <p>.Online</p>
      </Link>
      <API />
      {logged ? (
        <div className="list">
          <Link className="nav_Items" to="/list">
            <i className="far fa-list-alt" />
            <li>To-Do List</li>
          </Link>
          <Link className="nav_Items" to="/tracker">
            <i className="fas fa-wallet" />
            <li>Expense-Tracker</li>
          </Link>
          <Link to="/">
            <li onClick={logoutHandler}>Logout</li>
          </Link>
        </div>
      ) : null}
    </nav>
  );
}

export default Nav;
