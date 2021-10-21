import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div id="review">
      <div className="container">
        <h1 className="text-center my-5">
          What Our <span className="text-primary">Clint</span> Say
        </h1>
        <p className="text-center w-50 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores at explicabo numquam a
          maiores
        </p>
        <div className="row w-50 mx-auto gy-4">
          <div className="col-md-12">
            <div className="clint-wrapper border">
              <div className="single-clint">
                <div className="w-50 mx-auto">
                  <img
                    className="img-fluid"
                    src="https://www.mccnh.edu/images/mcc/admissions/new-student-secondary.jpg"
                    alt="profile img"
                  />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate deleniti dolorem ullam
                  nihil. Perferendis eum ratione fugiat sapiente facilis a minus reprehenderit tempora nemo,
                  debitis non harum nostrum deleniti aspernatur consequatur suscipit atque voluptas magnam illum
                  natus, rem minima officia? Vero exercitationem blanditiis sint iste. Est veniam ratione harum?
                </p>
                <h3>Kobir Mahamud</h3>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="clint-wrapper border">
              <div className="single-clint">
                <div className="w-50 mx-auto">
                  <img
                    className="img-fluid"
                    src="https://ceduema.com/wp-content/uploads/2014/01/college-student-520x378.jpg"
                    alt="profile img"
                  />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate deleniti dolorem ullam
                  nihil. Perferendis eum ratione fugiat sapiente facilis a minus reprehenderit tempora nemo,
                  debitis non harum nostrum deleniti aspernatur consequatur suscipit atque voluptas magnam illum
                  natus, rem minima officia? Vero exercitationem blanditiis sint iste. Est veniam ratione harum?
                </p>
                <h3>Sadia Sultana</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
