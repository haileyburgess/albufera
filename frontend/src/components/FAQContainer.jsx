import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FaqAccordion() {
  const navigate = useNavigate();
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  return (
    <div>
      <h2 className="eventsHeader">FAQs</h2>
      <div className="accordion">
        <Accordion>
          <AccordionSummary>
            What does a typical menu look like?
          </AccordionSummary>
          <AccordionDetails>
            At pop-up events, we typically serve 3 types of paella: Valencian,
            Marisco (seafood), and Vegan. If you are booking a private event, we
            can tailor which paellas are offered to your needs.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>What makes a paella Valencian?</AccordionSummary>
          <AccordionDetails>
            A traditional Valencian paella includes: Chicken, rabbit, flat green
            beans (bajoqueta), and large white beans (garrafo). Valencians call
            paellas with any other ingredients "rice with stuff." A Valencian
            paella will never mix land and sea, and is typically eaten for lunch
            around 3-4pm.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            What are the ingredients in your paellas?
          </AccordionSummary>
          <AccordionDetails>
            In a Paella Valenciana, you can expect: Chicken, Rabbit, bajoqueta,
            and garrafo.<br></br> In a Paella de Marisco, we include shrimp,
            squid, monkfish, and a salmorreta broth. <br></br> Vegetarian/vegan
            paella will include bajoqueta, garrafo, artichoke, onion, green
            peppers, and asparagus.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            How many people can 1 paella serve?
          </AccordionSummary>
          <AccordionDetails>
            It all depends on the size of paella pan and thickness of the rice.
            We can serve a wide range of audiences, from intimate dinner parties
            of a dozen to parties of 40+ people.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            How far in advance can I book a private event?
          </AccordionSummary>
          <AccordionDetails>
            Please plan to reach out to us 1 month in advance so we can iron out
            any details. We require at least 3 weeks lead time in order to book
            a private event.
          </AccordionDetails>
          <AccordionActions>
            <Button variant="contained" onClick={handleContactClick}>
              Book Now
            </Button>
          </AccordionActions>
        </Accordion>
      </div>
    </div>
  );
}
