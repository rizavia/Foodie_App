import ClassComponentAbout from "./ClassComponentAbout";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super();
    console.log("parent- constructor");
  }

  componentDidMount() {
    // API calls go here
    console.log("parent- componentDidMount");
  }
  componentDidUpdate() {
    //setTimeout, setInterval goes here
    //We'll refer the callback funcs. with a variable name so that its easier to clear them
    console.log("component Did Update");
  }

  componentWillUnmount() {
    //clearinterval, clearTimeout will come here.
    // we'll clear the callback func. by passing the variable to the clear funcs. with variables as arguements.s
    console.log("component will unmount");
  }
  render() {
    console.log("parent-render");
    return (
      <>
        <h1>This is our About page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has bee🏅n the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.🏆
        </p>

        <ClassComponentAbout />
      </>
    );
  }
}

export default About;
