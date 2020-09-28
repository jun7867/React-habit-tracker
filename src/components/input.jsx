import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input">
        <input
          type="text"
          name="input"
          className="input-box"
          placeholder="Habit"
        ></input>
        <button className="input-btn">Add</button>
      </div>
    );
  }
}

export default Input;
