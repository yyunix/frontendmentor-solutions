import { Movies } from "@/types/movies";
import Card from "./card";

type TrendingCardsProps = {
  movies: Movies[];
};

const TrendingCards = ({ movies }: TrendingCardsProps) => {
  return (
    <div className="relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 no-scrollbar pr-4 sm:pr-[25px]">
      {movies.map((movie) => (
        <Card key={movie.title} trending {...movie} />
      ))}
    </div>
  );
};

export default TrendingCards;
