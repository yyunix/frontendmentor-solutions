type HeadingProps = {
  heading: string;
};

const Heading = ({ heading }: HeadingProps) => {
  return (
    <h2 className="text-xl font-light sm:heading-lg mb-6 lg:mb-8">{heading}</h2>
  );
};

export default Heading;
