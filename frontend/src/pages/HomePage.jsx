import React from "react";
import Events from "../components/Events";
import HomepageImageList from "../components/ImageList";

export default function HomePage() {
  return (
    <div className="home">
      <div>
        <p className="about">
          Welcome! We are a Brooklyn-based duo serving authentic Valencian
          paella. We are committed to fresh ingredients and sourcing all of our
          bomba rice, saffron, and paprika directly from Valencia.
        </p>
        <div>
          <p className="about">
            Albufera is the name of a lagoon 10km from Valencia where paella was
            invented -- Local farmers used the ingredients on hand to create a
            beloved dish of chicken, rabbit, bajoqueta, and garrafo.
          </p>
        </div>
        <div>
          <p className="about">Serving traditional recipies and </p>
        </div>
      </div>
      <div className="hero">
        <HomepageImageList />
      </div>
      <div className="homeEvents">
        <Events />
      </div>
    </div>
  );
}
