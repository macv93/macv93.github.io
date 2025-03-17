import React from "react";
import { Link } from "./socialLinkConfig";

type SocialLinksProps = {
  links: Link[];
};

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          title={link.title}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="no-underline"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
