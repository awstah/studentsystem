import React from "react";
import { Hero } from "../components/Hero";
import Details from "../components/Details";
import { useSelector } from "react-redux";

function Home() {
  const { loading, data } = useSelector((state) => ({ ...state.record }));

  return (
    <div>
      <Hero />
      {loading ? (
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
