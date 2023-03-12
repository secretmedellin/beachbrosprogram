import React from "react";
import Pic from "../../images/logo-beach-rentails.jpg";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={Pic}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Beach Rental Socal"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <button className="nav-link px-2 text-white link-button">
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link px-2 text-white link-button">
                  <Link to="/about">About Us</Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Friends
                  {/* Test and Ajax Call */}
                </button>
              </li>
            </ul>
            <div className="text-end">
              <a
                href="/"
                className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                Associate
              </a>
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
