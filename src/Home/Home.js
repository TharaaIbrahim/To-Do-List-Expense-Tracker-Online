import React from "react";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import "./Home.css";

function Home({ logged, setLogged }) {
  return (
    <React.Fragment>
      <h1 className="home_Title">To-Do List/Expense Tracker</h1>
      <div className="home_layout">
        <Registration logged={logged} setLogged={setLogged} />
        <Login logged={logged} setLogged={setLogged} />
      </div>
    </React.Fragment>
  );
}

export default Home;
