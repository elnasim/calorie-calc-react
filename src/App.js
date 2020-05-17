import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/app/Header";

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.path === "/"}
              path={route.path}
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
