export type TrendingSize = {
  large: string;
  small: string;
};

export type RegularSize = {
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
    trending?: TrendingSize;
    regular: RegularSize;
  };
  title: string;
  year: number;
};
