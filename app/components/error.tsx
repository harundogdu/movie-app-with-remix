import { IErrorProps } from "~/types/root";

const Error = ({ error }: IErrorProps) => {
  return (
    <>
      <h1>Error - {error.name}</h1>
      <h5>{error.message}</h5>
      <p>{error?.stack || "Something went wrong!"}</p>
    </>
  );
};

export default Error;
