import React from "react";
import { Hero } from "../components/Hero";
import Details from "../components/Details";

function Home({ isloading }) {
  return (
    <div>
      <Hero />
      {isloading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Details />
      )}
    </div>
  );
}

export default Home;
