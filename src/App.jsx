import ClientLocation from "./ClientLocation";
import VantaBackground from "./VantaBackground";

const LINKEDIN_URL = "https://www.linkedin.com/in/manuel-canarte/";
const GITHUB_URL = "https://github.com/macv93";

const App = () => {
  return (
    <VantaBackground>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "monospace",
        }}
      >
        <h1 style={{ paddingLeft: "1rem" }}>Manny C.</h1>
        <ul style={{ display: "flex", gap: "1rem", paddingLeft: "1rem" }}>
          <a href={GITHUB_URL} title="Connect with me on GitHub">
            GitHub
          </a>
          <a href={LINKEDIN_URL} title="Connect with me on LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:manuel.canarte@gmail.com" title="Let's connect!">
            Contact
          </a>
        </ul>
        <ClientLocation />
      </nav>
    </VantaBackground>
  );
};

export default App;
