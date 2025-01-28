import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log('constructor called')
  }

  async componentDidMount() {
    console.log('mounted')
    const response = await fetch("https://api.github.com/users/Pinky");
    const data = await response.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
    console.log('data fetched')
  }

  componentDidUpdate(){
    console.log('updated');
  }

  componentWillUnmount(){
    console.log('unmounted');
  }

  render() {
    console.log('rendered called')
    const { id, login, location, avatar_url, followers } = this.state.userInfo;
    return (
      <>
        <h2 style={{ textAlign: "center" }}>Team Members</h2>
        <div className="flex flex-wrap">
          <div className="p-4 flex-basis-[20rem] m-8 mx-4 leading-[2rem] border border-[rgb(199,_199,_199)]" key={id}>
            <img className="h-[10rem] w-full" src={avatar_url} alt="Avatar" />
            <h4>Name : {login}</h4>
            <p>Location : India</p>
            <p>contact : +91 8796756454</p>
            <p>Followers : {followers}</p>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
