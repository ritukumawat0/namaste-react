import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){}

  render() {
    return (
      <div className="mt-32">
        <div> 
          <UserContext.Consumer>
             {({loggedInUser})=><h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass/>
      </div>
    );
  }
}

export default About;
