import React from "react";

class ClassComponentAbout extends React.Component {
  constructor() {
    super();
    console.log("child- constructor");
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("child- componentDidMount");
  }
  render() {
    console.log("child- render");
    return (
      <>
        <img src={this?.state?.userInfo?.avatar_url} />
        <h2>Name: {this?.state?.userInfo?.name}</h2>
        <h2>Login ID: {this?.state?.userInfo?.login}</h2>
        <h2>Location: {this?.state?.userInfo?.location}</h2>
      </>
    );
  }
}
export default ClassComponentAbout;
