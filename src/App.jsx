import React from "react";
import HydrocutIFrame from "./components/HydrocutIFrame";
import ImagePreviewRow from "./components/ImagePreviewRow";
import { socialLinkConfig } from "./components/socialLinkConfig";
import SocialLinks from "./components/SocialLinks";
import VantaBackground from "./components/VantaBackground";
import { CombinedImagesProvider } from "./contexts/CombinedImagesProvider";
import {allImages, thumbnails} from "./components/helpers/images";

const App = () => {

  const combinedImages = allImages.map((image, index) => ({
    thumbnail: thumbnails[index],
    fullImage: image,
  }));

  return (
    <CombinedImagesProvider combinedImages={combinedImages}>
      <VantaBackground>
        <nav className="flex flex-col">
          <section className="pl-4 mb-4">
            <h1 className="text-2xl">Manny C.</h1>
            <p className="italic text-md font-light">
              Fullstack developer fueled by React/TypeScript and mountain bike
              trails.
            </p>
          </section>
          <ul className="flex gap-4 pl-4 mb-4 text-lg">
            <a
              className="no-underline"
              href="/manny-canarte-software-developer.pdf"
              target="_blank"
            >
              Resume
            </a>
            <SocialLinks links={socialLinkConfig} />
            <a
              className="no-underline"
              href="mailto:manuel.canarte@gmail.com"
              title="Let's connect!"
            >
              Contact
            </a>
          </ul>

          <ImagePreviewRow />

          <HydrocutIFrame />
        </nav>
      </VantaBackground>
    </CombinedImagesProvider>
  );
};

export default App;
