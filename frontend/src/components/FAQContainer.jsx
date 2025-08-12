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
          <AccordionDetails>Test content</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>What makes a paella Valencian?</AccordionSummary>
          <AccordionDetails>Test content</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            What are the ingredients in your paellas?
          </AccordionSummary>
          <AccordionDetails>Test content</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            How many people can 1 paella serve?
          </AccordionSummary>
          <AccordionDetails>Test content</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            How far in advance can I book a private event?
          </AccordionSummary>
          <AccordionDetails>Test content</AccordionDetails>
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
