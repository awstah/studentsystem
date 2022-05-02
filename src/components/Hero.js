import React from "react";
import Banner from "../assets/banner.svg";

export const Hero = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="d-md-flex container justify-content-between align-items-center">
        <div className="col">
          <h2 className="display-1 fw-bolder">The Annual Conference</h2>
          <hr className="dropdown-divider w-25 border-3 border-dark" />
          <p className="fs-4 text-muted">Grand Space, Portland. 21-26 sept</p>
        </div>
        <div className="col">
          <img src={Banner} alt="banner" className="img-fluid w-100 h-auto" />
        </div>
      </div>
    </div>
  );
};
