import React, { Component } from "react";

class Reset extends Component {
  render() {
    return (
      <div className="reset">
        <button className="reset-btn" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Reset;
