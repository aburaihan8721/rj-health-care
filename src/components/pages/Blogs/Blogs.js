import React from "react";
import "./Blogs.css";

function Blogs() {
  return (
    <div className="mt-5">
      <div className="container">
        <h1 className="text-center">
          {" "}
          Our <span className="text-primary">Blogs</span> Blogs
        </h1>
        <p className="text-center w-50 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi provident fuga sint, expedita
          beatae.
        </p>
        <div className="row w-50 mx-auto gy-5">
          <div className="col-md-12">
            <h4>Lifestyle habits to keep your heart healthy</h4>
            <p>
              Cardiovascular diseases are one of the most common ailments among people and is the leading cause of
              death in and around the world, as per the World Health Organization (WHO). While older people are
              more prone to heart conditions, in recent times, there has been a surge in heart attack, cardiac
              arrest cases among youngsters.
            </p>

            <div>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2017/08/07/19/53/heart-2607178_960_720.jpg"
                alt="img"
              />
            </div>
            <p>
              Many experts and several studies have held unhealthy lifestyle habits responsible for this sudden
              rise in the number of young patients. That said, making the right choices, following a proper diet
              and resorting to healthy behaviours is what will keep your heart healthy in the long run. Therefore,
              here are some lifestyle changes you must adopt if you want to keep cardiovascular disease at bay.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>

          <div className="col-md-12">
            <h4>Keep a check on your blood pressure and cholesterol levels</h4>
            <p>
              It is extremely crucial that you manage your blood pressure and cholesterol levels for the healthy
              functioning of the heart. Hypertension and high cholesterol levels can increase your risk of heart
              ailments, including a stroke, heart attack and more.
            </p>

            <div>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2015/07/30/14/36/hypertension-867855_960_720.jpg"
                alt="img"
              />
            </div>
            <p>
              While both high blood pressure and high cholesterol do not have any particular tell-tale signs,
              leaving it untreated can cause many complications in the long run. This is why early diagnosis can
              help prevent further complications. Blood pressure can be tested at a clinic or at home with the help
              of blood pressure monitors, whereas you can get your cholesterol checked through a blood test.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>

          <div className="col-md-12">
            <h4>Avoid leading a sedentary lifestyle and exercise regularly</h4>
            <p>
              Being physically inactive ad lazing around can increase your risk of heart diseases. As per a study
              published in the Annals of Internal Medicine, it was found that sitting for long periods of time was
              linked to chronic health conditions including heart disease, Type 2 diabetes and cancer. Therefore,
              it is time to alter the ways and start exercising regularly. You can always start slow. Do not go all
              in, rather gradually increase your hours of exercise, focusing more on consistency.
            </p>

            <div>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_960_720.jpg"
                alt="img"
              />
            </div>
            <p>
              Many experts and several studies have held unhealthy lifestyle habits responsible for this sudden
              rise in the number of young patients. That said, making the right choices, following a proper diet
              and resorting to healthy behaviours is what will keep your heart healthy in the long run. Therefore,
              here are some lifestyle changes you must adopt if you want to keep cardiovascular disease at bay.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
