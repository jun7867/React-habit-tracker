import React, { Component } from "react";
import Habit from "./habit";
import Input from "./input";
import Reset from "./reset";

class Habits extends Component {
  render() {
    return (
      <>
        <Input onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <Reset onReset={this.props.onReset} />
      </>
    );
  }
}

export default Habits;
