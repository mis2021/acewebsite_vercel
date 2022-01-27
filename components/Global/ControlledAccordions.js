import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Parser from "html-react-parser";
import { padding } from "@mui/system";

export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState("pannel1" + 0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-blueGray-200 sec-padding">
      <section className=" pb-0 relative ">
        <div className="   mr-auto ml-auto -mt-48">
          {props.data.map((p, index) => (
            <Accordion
              expanded={expanded === "panel1" + index}
              onChange={handleChange("panel1" + index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={"panel1bh-header"}
              >
                <Typography sx={{ color: "text.secondary" }}>
                  {p.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 50 }}>
                <Typography>{Parser(p.content)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>
    </div>
  );
}
