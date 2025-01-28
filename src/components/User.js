import { useState } from "react";

const User = (props) => {
  return (
    <>
    <h2 style={{textAlign:"center"}}>Team Members</h2>
    <div className="flex flex-wrap">
      
      <div className="flex-basis-[20rem] m-8 mx-4 leading-[2rem] border border-[rgb(199,_199,_199)]">
           <img className="h-[10rem] w-full" src={avatar_url} alt="Avatar" />
            <h4>Name : {login}</h4>
            <p>Location : India</p>
            <p>contact : +91 8796756454</p>
            <p>Followers : {followers}</p>
      </div>
    </div>
    </>
  );
};

export default User;
