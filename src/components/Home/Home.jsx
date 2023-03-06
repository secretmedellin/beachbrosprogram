import React from "react";
import Pic from "./images/logo-beach-rentails.jpg";
// import Pic1 from ".../BEACH-BROS-LOGO-SAN-DIEGO.png";

const Home = () => {
  return (
    <React.Fragment>
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                Beach Bros Sharing Associate Program
              </h1>
              <p className="col-md-8 fs-4">
                This is a great opportunity for anyone looking to earn extra
                income. If you are interested in applying for this position,
                please choose your area and start today
                {/* The button below should make an ajax call when clicked. Look at
                your task details for more infomation about the specifics. */}
              </p>
              <p>
                <button className="btn btn-primary btn-lg">
                  Apply Now
                  {/* Make an Ajax Call on Click */}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* <h2>Heading</h2> */}
              <img src={Pic} alt="Sabio" />
              <p>
                Are you looking for an exciting job opportunity in Huntington
                Beach? Look no further! Our company is currently seeking
                individuals to join our team as delivery beach assosiates.
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
            <div className="col-md-4">
              {/* <h2>Heading</h2> */}
              <img src={Pic} alt="Sabio" />
              <p>
                Are you looking for an exciting job opportunity in Newport
                Beach? Look no further! Our company is currently seeking
                individuals to join our team as delivery beach assosiates.
                {/* As a
                delivery beach assosiated, you will be responsible for
                transporting various items, such as chairs, umbrellas, and other
                goods, to customers throughout the Newport Beach area. You will
                be provided with a all necessary equipment to ensure that you
                are able to complete your deliveries efficiently and safely. To
                qualify for this position, you just need filled a short
                application. We look
                forward to hearing from you and potentially welcoming you to our
                team of delivery beach assosiates in Newport Beach! */}
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
            <div className="col-md-4">
              {/* <h2>Heading</h2> */}
              <img src={Pic} alt="Sabio" />
              <p>
                <p>
                  Are you looking for an exciting job opportunity in San Diego?
                  Look no further! Our company is currently seeking individuals
                  to join our team as delivery beach assosiates.
                </p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
          </div>

          <hr />
        </div>
      </main>

      <footer className="container">
        <p>&copy; Beach Bros Sharing 2022-2023</p>
      </footer>
    </React.Fragment>
  );
};

export default Home;
