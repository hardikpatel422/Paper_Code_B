import React, { Component } from "react";

  import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Skill";
  import Contact from "./Contact";

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Skill">Skill</NavLink></li>
            <li><NavLink to="/Contactus">Contact Us</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Skill" component={Stuff}/>
            <Route path="/Contactus" component={Contact}/>
             
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;