import React, { PureComponent } from "react";

class Reset extends PureComponent {
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
