import { Link } from "remix";
import { IErrorProps } from "~/types/root";

const Error = ({ error }: IErrorProps) => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col space-y-6 dark:bg-primary">
      <h1 className="text-4xl">{error.name}</h1>
      <p className="text-lg">Something went wrong!</p>
      <Link to="/" className="bg-red-600 text-white px-8 py-2 rounded">
        Go back to home
      </Link>
    </div>
  );
};

export default Error;