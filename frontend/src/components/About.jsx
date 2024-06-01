import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Nestled in the heart of Kozhikode, KK Cafe is your haven for relaxation and delight. Savor a steaming cup of coffee or fragrant tea, handcrafted with love. We also offer a delightful selection of freshly baked pastries and light bites, perfect for a satisfying treat. Whether you're catching up with friends, seeking a quiet moment, or simply enjoying the vibrant city life, KK Cafe welcomes you with open arms.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
