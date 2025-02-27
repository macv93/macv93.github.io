import ClientLocation from "./ClientLocation";
import { socialLinkConfig } from "./socialLinkConfig";
import SocialLinks from "./SocialLinks";
import VantaBackground from "./VantaBackground";

const App = () => {
  return (
    <VantaBackground>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <section style={{ paddingLeft: "1rem" }}>
          <h1>Manny C.</h1>
          <p style={{ fontStyle: "italic" }}>
            Fullstack developer fueled by React/TypeScript and mountain bike
            trails.
          </p>
        </section>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <SocialLinks links={socialLinkConfig} />
          <a
            style={{ textDecoration: "none" }}
            href="mailto:manuel.canarte@gmail.com"
            title="Let's connect!"
          >
            Contact
          </a>
        </ul>
        <ClientLocation />
      </nav>
    </VantaBackground>
  );
};

export default App;
