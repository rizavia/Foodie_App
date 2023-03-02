import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className="error">
      <h1>Oopss....</h1>
      <br />
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default Error;
