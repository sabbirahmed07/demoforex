import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Home from "./components/Main/Home";
import SignUp from "./components/Main/SignUp";
import Order from "./components/Main/Order";
import Market from "./components/Main/Market";
import History from "./components/Main/History";
import Account from "./components/Main/Account";
import Login from "./components/Main/Login";
import MakeOrder from "./components/Main/MakeOrder";
import NotFound from "./components/Main/NotFound";

import reducers from "./components/redux/reducers";

import authGuard from "./components/HOCs/authGuard";

const jwtToken = localStorage.getItem("JWT_TOKEN");

const app = (
  <Provider
    store={createStore(
      reducers,
      {
        auth: {
          token: jwtToken,
          isAuthenticated: jwtToken ? true : false
        }
      },
      applyMiddleware(reduxThunk)
    )}
  >
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/orders" component={authGuard(Order)} />
          <Route exact path="/markets" component={Market} />
          <Route exact path="/history" component={authGuard(History)} />
          <Route exact path="/account" component={authGuard(Account)} />
          <Route exact path="/makeorder" component={authGuard(MakeOrder)} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
