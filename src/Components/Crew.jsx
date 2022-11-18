import React, { useEffect, useState } from "react";
import data from "../starter-code/data.json";
import img_0 from "../starter-code/assets/crew/image-douglas-hurley.png";
import { BsCircleFill } from "react-icons/bs";
import "../css/Crew.css";
export const Crew = () => {
  const [crew] = useState(data.crew);
  // console.log(crew)
  const [value, setValue] = useState(0);
  const { bio, images, name, role } = crew[value];
  return (
    <div className=" crew crew-section">
      <div className="container">
        <div className="crew-text">
          <h2>
          02 
            <span>MEET YOUR CREW</span>
          </h2>
        </div>
        <div className="container1">
          <div className="crew-image">
            <img src={images.png} alt="" />
            <hr />
          </div>

          <div className="data">
            {crew.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={index === value ? "white" : "gray"}
                >
                  <BsCircleFill />
                </button>
              </div>
            ))}
          </div>
        <div className="crew-data">
          <h2>{role}</h2>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
        </div>
      </div>
    </div>
  );
};
