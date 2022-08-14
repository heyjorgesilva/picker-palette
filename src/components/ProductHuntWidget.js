import React from "react";

const absoluteStyles = {
  zIndex: "100000000",
  margin: "0",
  position: "fixed",
  bottom: "0",
  left: 0,
  margin: "1rem"
};

const defaultStyles = {
  margin: "1rem"
};

export const ProducHuntWidget = ({ isDark, isAbsolute }) => {
  const styles = isAbsolute ? absoluteStyles : defaultStyles;
  return (
    <a
      href="https://www.producthunt.com/posts/copypalette?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-copypalette"
      target="_blank"
    >
    </a>
  );
};

export default ProducHuntWidget;
