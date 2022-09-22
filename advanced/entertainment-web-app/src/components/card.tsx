import { useEffect, useState } from "react";
import Image from "next/image";
import CategoryIcon from "@/assets/icon-category-movie.svg";
import BookmarkIcon from "@/assets/icon-bookmark-empty.svg";
import { Movies, Thumbnail } from "@/types/movies";
import { useWindowSize } from "@/hooks/useWindowSize";

type CardProps = Partial<Movies>;

const Card = (props: CardProps) => {
  const { title, category, year, rating, thumbnail, isTrending } = props;

  const [imageSize, setImageSize] = useState<keyof Thumbnail>("small");

  const { width } = useWindowSize();

  useEffect(() => {
    if (width! > 1024) {
      setImageSize("large");
    } else if (width! > 768) {
      setImageSize("medium");
    } else {
      setImageSize("small");
    }
  }, [width]);

  const imageFolder = isTrending ? "trending" : "regular";

  const imagePath = thumbnail!.regular[imageSize].replace("./", "/");

  return (
    <div className="w-full cursor-pointer relative">
      <div className="relative w-full">
        <div
          className={
            isTrending
              ? "relative h-[140px] w-[240px] sm:h-[230px] sm:w-[470px]"
              : "relative h-[110px] sm:h-[140px] lg:h-[174px]"
          }
        >
          <Image
            src={imagePath}
            alt="title"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-dark-blue/50 rounded-full">
          <BookmarkIcon />
        </button>
      </div>

      <div
        className={
          isTrending ? "absolute bottom-4 sm:bottom-6 left-4 sm:left-6" : "mt-2"
        }
      >
        <div className="body-sm text-white/75 flex space-x-1.5">
          <p>{year}</p>
          <p className="before:content-['•'] before:pr-1.5 flex items-center">
            <CategoryIcon />
            <span className="pl-1">{category}</span>
          </p>
          <p className="before:content-['•'] before:pr-1.5">{rating}</p>
        </div>
        <h5 className="md:heading-xs mt-1">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
