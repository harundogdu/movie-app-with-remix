import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  return redirect("/");
};

function Categories() {
  return <div>Error!</div>;
}

export default Categories;
