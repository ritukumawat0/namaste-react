import Header from "./Header";
// import { ERROR_URL } from "../utils/constants";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <>
       <Header/>
      <div className="mt-32 text-center leading-[5rem]">
        <h1>{err.data}</h1>
        <h3>{err.status} {err.statusText}</h3>
        {/* <img src={ERROR_URL} /> */}
      </div>
      </>
  );
};
export default Error;
