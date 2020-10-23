import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Problema2 from "./componentes/organismos/Problema2"


const App = () => {
  return (
    <Provider store={store}>
      <Problema2/>
    </Provider>
  );
};

export default App;
