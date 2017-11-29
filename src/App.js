import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <HashRouter>
                <div>
                    <NavLink to="/home" >Home</NavLink>
                    <NavLink to="/cart" >Cart</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>

                    <Route path="/home" component={Home}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </div>
            </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
