import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_960_720.jpg"
                    className="d-block w-100"
                    alt="img"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092_960_720.jpg"
                    className="d-block w-100"
                    alt="img"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410_960_720.jpg"
                    className="d-block w-100"
                    alt="img"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
