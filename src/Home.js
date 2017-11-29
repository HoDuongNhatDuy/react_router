import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import Cat1 from './Cat1';
import Cat2 from './Cat2';

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <h1>Home page</h1>
        <div className="App-intro">
            <div>
                <NavLink to="/home/cat1" >Cat1</NavLink>
                <NavLink to="/home/cat2" >Cat2</NavLink>

                <Route path={`${this.props.match.path}/cat1`} component={Cat1}></Route>
                <Route path={`${this.props.match.path}/cat2`} component={Cat2}></Route>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
