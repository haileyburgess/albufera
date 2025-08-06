import React from "react";
import Events from "../components/Events";
import HeroImage from "../components/HeroImage";

export default function HomePage() {
  return (
    <div className="home">
      <div>
        <p className="about">
          <span>Welcome! We are a Brooklyn-based duo serving authentic Valencian
          paella. We are committed to fresh ingredients and sourcing all of our
          bomba rice, saffron, and paprika directly from Valencia.</span>
          <span>Albufera is the name of a lagoon 10km from Valencia where paella was
          invented -- Local farmers used the ingredients on hand to create a
          beloved dish of chicken, rabbit, bajoqueta, and garrafo.</span>
          <span>Serving traditional recipies and </span>
        </p>
      </div>
      <div>
        <HeroImage />
      </div>
      <div className="homeEvents">
        <Events />
      </div>
    </div>
  );
}
