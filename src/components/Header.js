import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white z-50">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width={40} height={40} />
          </Link>
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-student">
                    Add student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </>
        </div>
      </nav>
    </header>
  );
}

export default Header;
