import { useEffect, useState } from "react";
import Image from "next/image";
import MovieIcon from "@/assets/icon-category-movie.svg";
import TVIcon from "@/assets/icon-category-tv.svg";
import EmptyBookmarkIcon from "@/assets/icon-bookmark-empty.svg";
import FullBookmarkIcon from "@/assets/icon-bookmark-full.svg";
import PlayIcon from "@/assets/icon-play.svg";
import { Movies, RegularSize, TrendingSize } from "@/types/movies";
import { useWindowSize } from "@/hooks/useWindowSize";

interface CardProps extends Movies {
  trending?: boolean;
}
const Card = (props: CardProps) => {
  const {
    title,
    category,
    year,
    rating,
    thumbnail,
    trending = false,
    isBookmarked,
  } = props;

  const [imageSize, setImageSize] = useState("small");
  const { width } = useWindowSize();
  const [isBooked, setIsBooked] = useState(isBookmarked);

  // Get the right image size depending on the window width
  useEffect(() => {
    if (width! > 1024) {
      setImageSize("large");
    } else if (width! > 768) {
      setImageSize(trending ? "large" : "medium");
    } else {
      setImageSize("small");
    }
  }, [width, trending]);

  // Get the image path
  const imageFolder = trending
    ? thumbnail.trending![imageSize as keyof TrendingSize]
    : thumbnail.regular[imageSize as keyof RegularSize];

  const imagePath = imageFolder.replace("./", "/");

  // Get the category icon
  const getCategoryIcon = () => {
    if (category === "Movie") return <MovieIcon />;
    if (category === "TV Series") return <TVIcon />;
  };

  // Handle bookmark on click
  const toggleBookmark = async () => {
    // when user clicks, update the state
    setIsBooked(!isBooked);
  };

  return (
    <div className=" w-full relative cursor-pointer">
      <div className="w-full">
        <div
          className={`group relative
            ${
              trending
                ? "h-[140px] w-[240px] sm:h-[230px] sm:w-[470px]"
                : "h-[110px] sm:h-[140px] lg:h-[174px]"
            }`}
        >
          <Image
            src={imagePath}
            alt="title"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          <div className="opacity-0 transition duration-100 ease-linear w-full h-full absolute group-hover:opacity-100 card-hover-bg">
            <div
              className="
          flex absolute inset-1/2 -translate-x-2/4 -translate-y-2/4 bg-white/25 py-[9px] pl-[9px] pr-6 rounded-[28.5px] w-fit h-fit items-center gap-[19px]"
            >
              <PlayIcon />
              <p className="heading-xs">Play</p>
            </div>
          </div>
        </div>
        <button
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-dark-blue/50 rounded-full hover:bg-white group"
          onClick={toggleBookmark}
          aria-label={`${
            isBooked ? "Unbookmark this video" : "Bookmark this video"
          }`}
        >
          {isBooked ? (
            <FullBookmarkIcon className="group-hover:stroke-dark-blue" />
          ) : (
            <EmptyBookmarkIcon className="group-hover:stroke-dark-blue" />
          )}
        </button>
      </div>

      <div
        className={
          trending ? "absolute bottom-4 sm:bottom-6 left-4 sm:left-6" : "mt-2"
        }
      >
        <div className="body-sm text-white/75 flex space-x-1.5">
          <p>{year}</p>
          <p className="before:content-['???'] before:pr-1.5 flex items-center">
            {getCategoryIcon()}
            <span className="pl-1">{category}</span>
          </p>
          <p className="before:content-['???'] before:pr-1.5">{rating}</p>
        </div>
        <h5 className="md:heading-xs mt-1">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
