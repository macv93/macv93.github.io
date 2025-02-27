import ClientLocation from "./ClientLocation";
import HydrocutIFrame from "./HydrocutIFrame";
import { socialLinkConfig } from "./socialLinkConfig";
import SocialLinks from "./SocialLinks";
import VantaBackground from "./VantaBackground";

const App = () => {
  return (
    <VantaBackground>
      <nav className="flex flex-col">
        <section className="pl-4">
          <h1 className="text-3xl font-semibold">Manny C.</h1>
          <p className="italic">
            Fullstack developer fueled by React/TypeScript and mountain bike
            trails.
          </p>
        </section>
        <ul className="flex gap-4 pl-4">
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
        <ClientLocation />
      </nav>
    </VantaBackground>
  );
};

export default App;
