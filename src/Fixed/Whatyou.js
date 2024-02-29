import React from "react";

const Whatyou = () => {
  const whatu = [
    {
      id: 1,
      ltext: "SUBJECTS & APPLICATIONS",
      rtext: "INTERNSHIP & PLACEMENT",
    },
    {
      id: 2,
      ltext: "SITE MANAGEMENT",
      rtext: "CERTIFICATE OF COMPLETION",
    },
    {
      id: 3,
      ltext: "QUANTITY SURVEYING",
      rtext: "REAL TIME SITE EXPERINCE",
    },
    {
      id: 4,
      ltext: "BAR BENDING SHEDULES",
      rtext: "INTERVIEW EXPERIENCE",
    },
    {
      id: 5,
      ltext: "QUALITY & SAFETY MANAGEMENT",
      rtext: "CLARITY ABOUT CAREER PATH",
    },
    {
      id: 6,
      ltext: "CONSTRUCTION TECHNOLOGY",
      rtext: "CONFIDENCE ON INDUSTRY",
    },
    {
      id: 7,
      ltext: "STANDARD CODE KNOWLEDGE",
      rtext: "VALUBLE NOTES",
    },
    {
      id: 8,
      ltext: "PLANNING & SHEDULING",
      rtext: "LIFE TIME EXPERT SUPPORT",
    },
    {
      id: 9,
      ltext: "DRAWING & DESIGNING",
      rtext: "DISCOUNTS ON MASTER PROGRAMMES",
    },
    {
      id: 10,
      ltext: "VASTU SHASTRA",
      rtext: "",
    },
    {
      id: 11,
      ltext: "ADVANCED SOFTWARE TOOLS",
      rtext: "",
    },
    {
      id: 12,
      ltext: "RESUME BUILDING",
      rtext: "",
    },
    {
      id: 12,
      ltext: "MOCK INTERVIEWS",
      rtext: "",
    },
  ];

  return (
    <div>
      <div className="w-full h-screen">
        {whatu.map(({ id, ltext, rtext }) => (
          <div key={id} className="flex justify-between w-full">

<div className=' grid grid-flow-col w-full md:h-screen'>


<div className='bg-black  text-white p-2 md:p-4 '>
 <h1 className=' justify-center text-white'>{ltext}</h1>
 </div>



   
   <div className=' border-blue-500 border-4 shadow-black  from-black  text-sm md:text-2xl font-bold rounded-r-3xl'>
     <div className=' justify-around uppercase'>
<h1 className='md:my-5'>{rtext}</h1>

</div>
   </div>

 

 </div>




























          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatyou;
