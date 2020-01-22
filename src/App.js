import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";

import Welcome from "./Components/welcome";
import Signup from "./Components/signup";
import Login from "./Components/login";
import MoviesList from "./Components/movieslist";
import AdminLogin from "./Components/adminLogin";

class App extends React.Component {
  fn() {
    Axios.get("http://localhost:3030").then(res => {
      console.log(res);
    });
  }

  componentDidMount() {
    this.fn();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/adminlogin" exact component={AdminLogin} />
            <Route
              path="/moviesList"
              crossorigin
              exact
              component={MoviesList}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
