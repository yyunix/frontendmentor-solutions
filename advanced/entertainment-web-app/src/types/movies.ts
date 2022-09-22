export type Thumbnail = {
  large: string;
  medium: string;
  small: string;
};

export type Movies = {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: Thumbnail;
    trending?: { large: string; small: string };
  };
  title: string;
  year: number;
};
