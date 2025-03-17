import React, { useMemo, useEffect, useContext } from "react";
import { useCombinedImagesContext } from "../contexts/CombinedImagesProvider";

const ImagePreviewRow = () => {
 
  const { combinedImages, fullScreenImage, setFullScreenImage, navigateImage } = useCombinedImagesContext();
  const imagesPerRow = 6;

  const handleImageClick = (image: { fullImage?: any; }) => {
    if (image.fullImage) {
      setFullScreenImage(image.fullImage);
    }
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  const rows = useMemo(() => {
    const newRows = [];
    for (let i = 0; i < combinedImages.length; i += imagesPerRow) {
      newRows.push(combinedImages.slice(i, i + imagesPerRow));
    }
    return newRows;
  }, [combinedImages, imagesPerRow]);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (fullScreenImage) {
        if (event.key === "ArrowLeft") {
          navigateImage("left");
        } else if (event.key === "ArrowRight") {
          navigateImage("right");
        } else if (event.key === "Escape") {
          handleCloseFullScreen();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullScreenImage, combinedImages, navigateImage]);

  return (
    <div className="pl-4">
      <div className="mb-2">
        <span className="font-semibold">Photography</span>
      </div>
      <div>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap">
            {row.map((image: { thumbnail?: any; fullImage?: any; }, imageIndex: React.Key | null | undefined) => {
              return (
                <img
                  key={imageIndex}
                  src={image.thumbnail}
                  alt={`Preview ${rowIndex}-${imageIndex}`}
                  className="w-20 h-20 m-1 cursor-pointer object-cover transition-transform duration-200 ease-in-out hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(image);
                  }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null;
                  }}
                />
              );
            })}
          </div>
        ))}

        {fullScreenImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50">
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-none border-none text-white text-3xl cursor-pointer"
              onClick={() => navigateImage("left")}
              aria-label="Previous Image"
            >
              {"<"}
            </button>
            <img
              src={fullScreenImage}
              alt="Full Screen"
              className="max-h-[90vh] max-w-[90vw] object-contain" 
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
              }}
            />
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-none border-none text-white text-3xl cursor-pointer"
              onClick={() => navigateImage("right")}
              aria-label="Next Image"
            >
              {">"}
            </button>
            <button
              className="absolute top-5 right-5 bg-none border-none text-white text-xl cursor-pointer"
              onClick={handleCloseFullScreen}
              aria-label="Close Full Screen"
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
