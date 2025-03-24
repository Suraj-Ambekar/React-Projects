import React from "react";

export const FaqList = ({ curData, active, onClick }) => {
  return (
    <li>
      <div className="accordion-grid">
        <p>{curData.question}</p>
        <button
          onClick={() => onClick(curData.id)}
          className={active == curData.id ? "active-btn" : ""}
        >
          {active == curData.id ? "CLOSE" : "SHOW"}
        </button>
      </div>
      <p>{active == curData.id && curData.answer}</p>
    </li>
  );
};
