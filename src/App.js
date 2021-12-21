import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Tracker from "./Expense-Tracker/Tracker";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Form from "./ToDoForm/Form";

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <Router>
      <Nav logged={logged} setLogged={setLogged} />
      <Switch>
        <Route exact path="/">
          <Home logged={logged} setLogged={setLogged} />
        </Route>

        <Route path="/list">
          <Form />
        </Route>

        <Route path="/tracker">
          <Tracker />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
