import React, { useEffect, useState } from "react";
// import Glide from "@glidejs/glide";
// import "@glidejs/glide/"
// import "@glidejs/glide/dist/css/glide.theme.min.css";
// import "https://cdn.jsdelivr.net/npm/@glidejs/glide";
import "../css/Destination.css";
import img_0 from "../starter-code/assets/destination/image-moon.png";
import img_1 from "../starter-code/assets/destination/image-mars.png";
import img_2 from "../starter-code/assets/destination/image-europa.png";
import img_3 from "../starter-code/assets/destination/image-titan.png";
// import loadingIcon from "../assets/shared/loading.png";
import data from "../starter-code/data.json";

export const Destination = () => {
  const [planets] = useState(data.destinations);
  // console.log(planets);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];

  const imgIndex = (data) => {
    switch (data) {
      case 0:
        return img_0;
      case 1:
        return img_1;
      case 2:
        return img_2;
      case 3:
        return img_3;
      default:
        return false;
    }
  };
  return (
    <div className="destination section wrapper" style={{ color: "white" }}>
      <div className="container">
        <div className="text">
          <h2>
            01
            <span>PICK YOUR DESTINATION</span>
          </h2>
          <div className="dest-image">
            <img src={images.png} alt={name} title={name} />
          </div>
        </div>

        <div className="dest-content">
          <ul className="content">
            {planets.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={index === value ? "des-white" : ""}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="name-content">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <hr />
          <div className="distance">
            <ul>
              <li>
                AVG. DISTANCE
                <span>{distance}</span>
              </li>
              <li>
                EST. TRAVEL TIME
                <span>{travel}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
