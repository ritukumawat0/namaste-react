import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Default User"
});
console.log(createContext())

export default UserContext;