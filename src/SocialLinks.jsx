import React from "react";

const SocialLinks = ({ links }) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          title={link.title}
          target="_blank"
          aria-label={link.ariaLabel}
          style={{ textDecoration: "none" }}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
