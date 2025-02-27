import React from "react";

const SocialLinks = ({ links }) => {
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
