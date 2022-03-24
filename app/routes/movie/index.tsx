import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  return redirect("/");
};

function Movies() {
  return <div>Error!</div>;
}

export default Movies;
