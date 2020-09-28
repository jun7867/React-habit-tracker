import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-dice-three"></i>
        <span className="navbar-name">Habit Tracker</span>
        <span className="navbar-count">0</span>
      </div>
    );
  }
}

export default Navbar;
