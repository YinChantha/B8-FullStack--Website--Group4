const ImageDisplay = ({ count }) => {
  // Generate an array with the necessary number of images
  const images = [];
  for (let i = 0; i < count; i++) {
    images.push(
      <div className="flex">
        <img
          key={i}
          src="/images/star.png"
          alt="star number"
          className="w-[17px] h-[17px] flex flex-row gap-[4px]"
        />
      </div>
    );
  }

  // Render the images
  return <div className="flex gap-1 items-center image-display">{images}</div>;
};

export default ImageDisplay;
