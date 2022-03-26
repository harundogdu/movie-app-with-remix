import { IMoviesProps } from "~/types/movies";
import { HeroSection, MoviesCard, MainTitle } from "~/components";

interface ICategorySectionProps {
  title: string;
  movies: IMoviesProps[];
  heroSectionMovie: IMoviesProps;
}

function CategorySection({
  title,
  movies,
  heroSectionMovie,
}: ICategorySectionProps) {
  const BASE_BACKDROP_PATH = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection
        img={`${BASE_BACKDROP_PATH}/${heroSectionMovie.backdrop_path}`}
        title={heroSectionMovie.title}
        overview={heroSectionMovie.overview}
        id={heroSectionMovie.id}
      />

      <MainTitle title={title} />

      <div className="grid grid-cols-5 w-full px-6" >
        {movies.map((movie, index) => (
          <MoviesCard movie={movie} key={`${movie.id}_${index}`} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
