import React, { useState } from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import data from "../starter-code/data.json";
import "../css/Technology.css";
export const Technology = () => {
  const [technology] = useState(data.technology);
  console.log(technology);
  const [value, setValue] = useState(0);
  const { description, images, name } = technology[value];
  return (
    <div className="technology section">
      <div className="container">
        <div className="tech-name">
          <h2>
            03 <span>SPACE LAUNCH 101</span>
          </h2>
          <div className="tech-images">
            <img src={images.portrait} alt="" />
          </div>
        </div>
        <div className="tech-container">
        <div className="tech-data">
          {technology.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setValue(index)}
                className={index === value ? "tech-white" : "tech-gray"}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="tech-desc">
          <h3>THE TERMINOLOGY...</h3>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        </div>
      </div>
    </div>
  );
};
