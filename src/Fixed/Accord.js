import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="m-5 p-10 md:text-2xl text-white">
        <h1 className=" text-2xl font-bold border-b-4 border-blue-700">FAQ </h1>
        <Accordion open={open === 1}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(1)}>What is Mode of Teaching?</AccordionHeader>
        <AccordionBody  className="text-white">
        it is available in both Online/Offline
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(1)}>is it recorded videos?</AccordionHeader>
        <AccordionBody  className="text-white">
        no, it is puely Live in both Online/Offline
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(1)}>What are the softwares coverd in training</AccordionHeader>
        <AccordionBody  className="text-white uppercase">
        Auto Cad,stad pro,etabs,revit,safe,rcdc,sap2000
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(1)}>i have no experience in design feiled,still can i join and learn?</AccordionHeader>
        <AccordionBody  className="text-white">
       Yes,this training has been design to teach from basics to Advance
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(1)}>What is min qualification required for this training?</AccordionHeader>
        <AccordionBody  className="text-white">
       Here we offering the Course with min-qualification 10th to PG Level 
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 1}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(1)}>Can i Get certification after completation?</AccordionHeader>
        <AccordionBody  className="text-white">
        yes,certificate of  Course completation provided
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader  className="text-white" onClick={() => handleOpen(2)}>
          Is it Real time  Experience
        </AccordionHeader>
        <AccordionBody  className="text-white">
          Yes,we will take you to on site for gain real time experience
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className="text-white" onClick={() => handleOpen(3)}>
          can i get support From MVS after completation
        </AccordionHeader>
        <AccordionBody  className="text-white">
       yes,we Provide life time suports to our students 
        </AccordionBody>
      </Accordion>
      </div>
    </>
  );
}