import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { allImages, thumbnails } from "./components/helpers/images";
import { socialLinkConfig } from "./components/socialLinkConfig";
import SocialLinks from "./components/SocialLinks";
import VantaBackground from "./components/VantaBackground";
import { CombinedImagesProvider } from "./contexts/CombinedImagesProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const combinedImages = allImages.map((image, index) => ({
    thumbnail: thumbnails[index],
    fullImage: image,
  }));

  return (
    <CombinedImagesProvider combinedImages={combinedImages}>
      <VantaBackground>
        <Router>
          <nav className="flex flex-col">
            <section className="pl-4 mb-4">
              <h1 className="text-2xl">
                <Link to="/">Manny C.</Link>
              </h1>
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
              <Link to="/photography">Photography</Link>
              <SocialLinks links={socialLinkConfig} />
              <a
                className="no-underline"
                href="mailto:manuel.canarte@gmail.com"
                title="Let's connect!"
              >
                Contact
              </a>
            </ul>

            <AppRoutes />
          </nav>
        </Router>
      </VantaBackground>
    </CombinedImagesProvider>
  );
};

export default App;
