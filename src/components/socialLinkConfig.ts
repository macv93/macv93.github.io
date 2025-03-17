export type Link = {
  id: string;
  url: string;
  title: string;
  ariaLabel: string;
  text: string;
};

const LINKEDIN_URL = "https://www.linkedin.com/in/manuel-canarte/";
const GITHUB_URL = "https://github.com/macv93";
const STRAVA_URL = "https://www.strava.com/athletes/17992761";

export const socialLinkConfig : Link[] = [
  {
    id: "github",
    url: GITHUB_URL,
    title: "Connect with me on GitHub",
    ariaLabel: "GitHub Profile",
    text: "GitHub",
  },
  {
    id: "linkedin",
    url: LINKEDIN_URL,
    title: "Connect with me on LinkedIn",
    ariaLabel: "LinkedIn Profile",
    text: "LinkedIn",
  },
  {
    id: "strava",
    url: STRAVA_URL,
    title: "Connect with me on Strava",
    ariaLabel: "Strava Profile",
    text: "Strava",
  },
];
