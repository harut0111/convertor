import React from 'react';
import './App.css';
import Converter from './js/components/Converter';
import { Provider } from "react-redux";
import { store } from "./js/redux/store/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Converter />
      </Provider>
    </div>
  );
}

export default App;
