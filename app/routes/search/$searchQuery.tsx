import { json, LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getSearchMovieDetails } from "~/services/apiService";
import { IMoviesProps } from "~/types/movies";
import { MainTitle, MoviesCard } from "~/components";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.searchQuery, "params is required");
    const searchQuery = params.searchQuery;
    return json(await getSearchMovieDetails(searchQuery));
}

const SearchQuery = () => {
    const movies = useLoaderData<IMoviesProps[]>();
    return (
        <div className="px-8">
            {
                movies.length > 0 ?
                    (
                        <>
                            <MainTitle title="your search results are listed..." />
                            <div className="grid grid-cols-5 w-full px-6">
                                {movies.map((movie, index) => (
                                    <MoviesCard
                                        movie={movie}
                                        key={`${(index + 1) * Math.random() * 10000} `}
                                    />
                                ))}
                            </div>
                        </>
                    )
                    :
                    (
                        <MainTitle title="sorry, no results found..." />
                    )
            }
        </div>
    );
};

export default SearchQuery;