import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Routers from './routes'
import { Provider } from 'react-redux';
import store from 'store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routers />
      </Router>
    </Provider>
  );
}

export default App;
