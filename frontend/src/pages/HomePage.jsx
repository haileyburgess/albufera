import React from "react";
import Events from "../components/Events";

export default function HomePage() {
  return (
    <div>
      <p className="about">
        Welcome! We are a Brooklyn-based duo
        serving authentic Valencian paella. We are committed to fresh
        ingredients and sourcing all of our bomba rice, saffron, and paprika
        directly from Valencia. <br></br>Albufera is the name of a lagoon 10km from
        Valencia where paella was invented -- Local farmers used the ingredients
        on hand to create a beloved dish of chicken, rabbit, bajoqueta, and
        garrafo.
      </p>
      <div>
        <Events />
      </div>
    </div>
  );
}
