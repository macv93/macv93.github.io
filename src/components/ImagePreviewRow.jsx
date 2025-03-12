import React, { useState } from 'react';

const ImagePreviewRow = ({ images }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const IMAGES_PER_ROW = 5; 

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  const rows = [];
  for (let i = 0; i < images.length; i += IMAGES_PER_ROW) {
    rows.push(images.slice(i, i + IMAGES_PER_ROW));
  }

  return (
    <div className="pl-4">
      <div className="mb-2">
        <span className="font-semibold">Photography</span>
      </div>
      <div>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex whitespace-nowrap">
            {row.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={image}
                alt={`Preview ${rowIndex}-${imageIndex}`}
                className="h-20 m-1 cursor-pointer object-cover transition-transform duration-200 ease-in-out hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick(image);
                }}
              />
            ))}
          </div>
        ))}

        {fullScreenImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50"
            onClick={handleCloseFullScreen}
          >
            <img
              src={fullScreenImage}
              alt="Full Screen"
              className="max-h-full max-w-full object-contain"
            />
            <button
              className="absolute top-5 right-5 bg-none border-none text-white text-xl cursor-pointer"
              onClick={handleCloseFullScreen}
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreviewRow;