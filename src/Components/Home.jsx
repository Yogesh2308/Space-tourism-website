import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
export const Home = () => {
  return (
    <div className="homeSection">
      <div className="container">
        <div className="hometitle">
          <h1>
            <span className="title">SO, YOU WANT TO TRAVEL TO</span>
            <span className="subtitle">SPACE</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="button-explore">
          <Link to="/destination">
            <div className="row">
              <div className="btn">
                <span>EXPLORE</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
