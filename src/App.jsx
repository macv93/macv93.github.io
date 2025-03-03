import HydrocutIFrame from "./components/HydrocutIFrame";
import { socialLinkConfig } from "./components/socialLinkConfig";
import SocialLinks from "./components/SocialLinks";
import VantaBackground from "./components/VantaBackground";

const App = () => {
  return (
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
          <SocialLinks links={socialLinkConfig} />
          <a
            className="no-underline"
            href="mailto:manuel.canarte@gmail.com"
            title="Let's connect!"
          >
            Contact
          </a>
        </ul>
        <HydrocutIFrame />
      </nav>
    </VantaBackground>
  );
};

export default App;
