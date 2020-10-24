import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Problema2 from "./componentes/organismos/Problema2";
import Problema3 from "./componentes/organismos/Problema3";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        
          <nav className="bg-blue-500 text-white h-16">
            <ul className="grid grid-cols-6">
              <li>
                <Link to="/problema2">click para ver problema 2</Link>
              </li>
              <li>
                <Link to="/problema3">click para ver problema 3</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/problema2">
              <Problema2 />
            </Route>
            <Route path="/problema3">
              <Problema3 />
            </Route>
          </Switch>
        
      </Router>
    </Provider>
  );
};

export default App;
