import { useEffect, useState } from "react";
import FAQ from "../api/faq.json";
import { FaqList } from "../Layout/FaqList";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    setData(FAQ);
  }, []);

  const handleActive = (id) => {
    if (id == active) setActive("");
    else setActive(id);
  };

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((i) => {
          return (
            <FaqList
              key={i.id}
              curData={i}
              active={active}
              onClick={() => handleActive(i.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
