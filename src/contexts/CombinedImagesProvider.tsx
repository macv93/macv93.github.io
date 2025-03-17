import React, { createContext, useState, ReactNode, useContext } from "react";

type CombinedImage = {
  fullImage: string;
};

type CombinedImagesContextType = {
  combinedImages: CombinedImage[];
  fullScreenImage: string | null;
  setFullScreenImage: React.Dispatch<React.SetStateAction<string | null>>;
  navigateImage: (direction: "left" | "right") => void;
  children?: ReactNode;
};

type CombinedImagesProviderProps = {
  combinedImages: CombinedImage[];
  children?: ReactNode;
};

const CombinedImagesContext = createContext<CombinedImagesContextType | undefined>(undefined);

const useCombinedImagesContext = () => {
  const context = useContext(CombinedImagesContext);
  if (context === undefined) {
    throw new Error("useCombinedImagesContext must be used within a CombinedImagesProvider");
  }
  return context;
};
const CombinedImagesProvider = ({ children, combinedImages }: CombinedImagesProviderProps) => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const navigateImage = (direction: "left" | "right") => {
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



export { CombinedImagesProvider, CombinedImagesContext, useCombinedImagesContext };
