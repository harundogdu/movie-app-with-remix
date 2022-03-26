import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMoviesByCategory } from "~/services/apiService";
import { IMoviesProps } from "~/types/movies";
import { CategorySection } from "~/components";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.categorySlug, "Category slug is required");
  let { categorySlug } = params;
  let title = "";

  switch (categorySlug) {
    case "popular":
      title = "Popular Movies";
      break;
    case "top-rated":
      title = "Top Rated Movies";
      categorySlug = "top_rated";
      break;
    case "upcoming":
      title = "Upcoming Movies";
      break;
    default:
      title = "Now Playing Movies";
      break;
  }

  const { results } = await getMoviesByCategory(categorySlug);

  return { results, title };
};

function CategoryDetails() {
  const { results, title } = useLoaderData();
  const movies: IMoviesProps[] = results;
  const heroSectionMovie =
    movies.find((movie) => movie.vote_average > 8) || movies[0];
  return (
    <CategorySection
      title={title}
      movies={movies}
      heroSectionMovie={heroSectionMovie}
    />
  );
}

export default CategoryDetails;
