import React, { memo } from "react";

const Input = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="input" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="input-box"
        placeholder="Habit"
      ></input>
      <button className="input-btn">Add</button>
    </form>
  );
});

export default Input;
