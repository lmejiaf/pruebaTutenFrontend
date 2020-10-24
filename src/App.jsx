import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Problema2 from "./componentes/organismos/Problema2"
import Problema3 from "./componentes/organismos/Problema3"


const App = () => {
  return (
    <Provider store={store}>
      <Problema3/>
    </Provider>
  );
};

export default App;
