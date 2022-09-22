import { Movies } from "@/types/movies";
import Card from "./card";

type CardGridProps = {
  movies: Movies[];
};

const CardGrid = ({ movies }: CardGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-auto-fill gap-4 sm:gap-[30px] lg:gap-10">
      {movies
        .filter((movie) => !movie.isTrending)
        .map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
    </div>
  );
};

export default CardGrid;
