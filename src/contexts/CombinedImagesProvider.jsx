import React, { createContext, useState } from "react";

const CombinedImagesContext = createContext();

const CombinedImagesProvider = ({ children, combinedImages }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const navigateImage = (direction) => {
    if (!fullScreenImage) return;

    const currentIndex = combinedImages.findIndex(
      (img) => img.fullImage === fullScreenImage
    );
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === "left") {
      newIndex =
        currentIndex - 1 < 0 ? combinedImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex + 1 >= combinedImages.length ? 0 : currentIndex + 1;
    }

    setFullScreenImage(combinedImages[newIndex].fullImage);
  };

  return (
    <CombinedImagesContext.Provider value={{ combinedImages, fullScreenImage, setFullScreenImage, navigateImage }}>
      {children}
    </CombinedImagesContext.Provider>
  );
};

export { CombinedImagesProvider, CombinedImagesContext };
