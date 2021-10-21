import React from "react";
import "./About.css";

function About() {
  const profileData = [
    {
      id: 1,
      img: "https://i.ibb.co/y4bBXxY/anita.jpg",
      name: "Dr. Anita Roy",
      expert: "Medicine Specialist",
      contact: "+0101010101",
    },
    {
      id: 2,
      img: " https://i.ibb.co/KyqwDKQ/ibrahim.webp",
      name: "Dr. Ibrahim Kholil",
      expert: "Orthopedic Specialist",
      contact: "+0202020202",
    },
    {
      id: 3,
      img: "https://i.ibb.co/5WJL3fH/zinia.webp",
      name: "Dr. Zinia Tamanna",
      expert: "Anesthesiologists",
      contact: "+0303030303",
    },
    {
      id: 4,
      img: "https://i.ibb.co/TKmWWSz/naman.webp",
      name: "Dr. Noman Kibria",
      expert: "Cardiologists",
      contact: "+0404040404",
    },
  ];

  return (
    <div id="about-area">
      <div className="container">
        <h1 className="text-center my-4">
          Our <span className="text-primary">Doctors</span>
        </h1>

        <div className="row w-75 mx-auto g-4">
          {profileData?.map((profile) => (
            <div className="col-md-6" key={profile.id}>
              <div className="about-wrapper">
                <div className="single-about p-3 border rounded-3">
                  <div>
                    <img className="img-fluid" src={profile.img} alt="img" />
                  </div>
                  <h5 className="mt-3">{profile.name}</h5>
                  <h3>{profile.expert}</h3>
                  <p>contact: {profile.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
