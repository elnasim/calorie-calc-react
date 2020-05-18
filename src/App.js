import React from "react";
import {  HashRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/app/Header";

export default function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}
