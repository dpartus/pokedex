import React, { useState } from "react";
import "./accordion.scss";

interface AccordionProp {
  title: string;
  content: string[];
}

const Accordion: React.FC<AccordionProp> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  if (!content.length) {
    return <h4>No {title} are available</h4>;
  }

  const orderedContent = content.map((item) => {
    return <p>{item}</p>;
  });

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">{content.join(", ")}</div>
      )}
    </div>
  );
};

export default Accordion;
