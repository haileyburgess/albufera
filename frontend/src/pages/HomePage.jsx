import React from "react";
import Events, { FutureEvents } from "../components/Events";
import HomepageImageList from "../components/ImageList";

export default function HomePage() {
  return (
    <div className="home">
      <div>
        <img
          src="/assets/logo.png"
          className="logo"
          alt="Drawing of paella and wine glasses"
        ></img>
      </div>
      <div>
        <h3>From Valencia to Brooklyn</h3>
        <p className="about">
          We're a Brooklyn-based pop-up dedicated to making real paella the way
          it's done in Valencia. Head chef Miguel is a native of the city and
          brings a passion for traditional technique and flavor. Everything
          starts with the right ingredients—bomba rice, saffron, and smoked
          paprika—sourced directly from Spain.
        </p>
        <div>
          <h3>Where Paella Began</h3>
          <p className="about">
            Our name, La Albufera, comes from the lagoon near Valencia where
            paella originated. It began as a dish made by farmers with what was
            around: chicken, rabbit, flat green beans (bajoqueta), and large
            white beans (garrafo). We honor that origin by staying close to the
            classic, while also offering a few thoughtful variations.
          </p>
        </div>
        <h3>What We Serve</h3>
        <div>
          <p className="about">
            We offer traditional Paella Valenciana, Paella de Marisco, and a
            vegetarian/vegan option. In colder months, we add rotating seasonal
            varieties. All of our paellas are cooked on-site and over flame.
          </p>
        </div>
      </div>
      <div className="imageGrid">
        <HomepageImageList />
      </div>
      <div className="homeEvents">
        <FutureEvents />
      </div>
    </div>
  );
}
