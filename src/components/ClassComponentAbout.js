import React from "react";

class ClassComponentAbout extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  render() {
    console.log("render");
    return <h2>This is coming from the class Component</h2>;
  }
}
export default ClassComponentAbout;
