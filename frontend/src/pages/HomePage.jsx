import React from "react";
import Events, { FutureEvents } from "../components/Events";
import HomepageImageList from "../components/ImageList";

export default function HomePage() {
  return (
    <div className="home">
      <div>
        <p className="about">
          We are a Brooklyn-based duo serving authentic Valencian paella - The
          head chef, Miguel, is a native of Valencia, Spain. We are committed to
          fresh ingredients and to sourcing all of our bomba rice, saffron, and
          paprika directly from Valencia.
        </p>
        <div>
          <p className="about">
            La Albufera is the Valencia lagoon where paella was invented - Local
            farmers used ingredients on hand to create a beloved dish of
            chicken, rabbit, bajoqueta, and garrafo.
          </p>
        </div>
        <div>
          <p className="about">
            We prepare traditional recipies of Paella Valenciana and Paella de
            Marisco alongside a vegetarian- and vegan-friendly offering, plus
            winter varieties with seasonal vegetables.
          </p>
        </div>
      </div>
      <div className="imageGrid">
        <HomepageImageList />
      </div>
      <div className="homeEvents">
        <FutureEvents />
      </div>
      <div className="logo">
        <img
          src="/assets/logo.png"
          width={350}
          height={350}
          alt="Drawing of paella and wine glasses"
        ></img>
      </div>
    </div>
  );
}
