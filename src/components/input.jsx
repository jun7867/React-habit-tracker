import React, { PureComponent } from "react";

class Input extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
  };

  render() {
    return (
      <form className="input" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="input-box"
          placeholder="Habit"
        ></input>
        <button className="input-btn">Add</button>
      </form>
    );
  }
}

export default Input;
