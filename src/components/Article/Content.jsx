import React, { useState } from 'react';

export const Content = ({ content }) => {
  const short = content.length > 650 ? content.substr(0, 600) : null;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded(!isExpanded);

  if (!short) return content;

  if (isExpanded)
    return (
      <>
        {content} <button onClick={toggle}>Show less</button>
      </>
    );

  return (
    <>
      {short}... <button onClick={toggle}>Show more</button>
    </>
  );
};
