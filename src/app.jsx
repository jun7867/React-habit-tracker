import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Input from "./components/input";
import Reset from "./components/reset";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Input />
        <Habits />
        <Reset />
      </>
    );
  }
}

export default App;
