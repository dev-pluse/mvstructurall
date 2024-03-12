import React from "react";
import Logo from "../assets/mvslogo.png";
import Experience from "../Fixed/boxes";
import { Helmet } from "react-helmet";
import { DefaultAccordion } from "../Fixed/Accord";
import { CardWithLink } from "../Fixed/cards";

import { useNavigate } from "react-router-dom";
import w1 from "../assets/wave.svg";
import Stub from "../Fixed/Stub.";

import ai from "../assets/pexels-airam-datoon-15189552.jpg";
import si from "../assets/modueimages/pexels-yury-kim-585418.jpg";
import { CarouselWithContent } from "../Fixed/car";

const HomeInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="capitalize text-blue-700 bg-black overflow-x-hidden">
      <Helmet>
        <title>MVStructurall</title>
        <meta
          name="description"
          content="let's build your career towardsSafety,Stability,Sustainability. Your Trusted Partner in Civil and Structurall Engineering Excellence!Eligible Roles:1.SITE ENGINEER            
          2.PLANNING ENGINEER        
          3.QUALITY CONTROL ENGINNER 
          4.SAFETY ENGINEER          
          5.RESIDENT ENGINEER        
          6.BASIC STRUCTURAL DESIGNER
          7.QUANITY SURVEYOR         
          8.BILLING ENGINEER         
          9.CIVL ENGINEER            
          10.PROJECT ENGINEER         "
        />
        <link rel="canonical" href="https://mvstructurall.com/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>
      
   <CarouselWithContent/>
      <div className="block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full h-screen p-10 bg-white">
        <div className="hidden md:block">
          <h1 className="capitalize text-blue-700 text-md md:text-5xl">
            get your career boost with MVStructurall Engineering 
          </h1>
          <h4 className="mt-3 capitalize text-capitalize">
            
          </h4>
          <h4 className="mt-3 capitalize text-black text-md">
            Your Trusted Partner in Civil and Structurall Engineering
            Excellence!
          </h4>

          <button
            className=" hidden md:block text-center mt-10 bg-blue-500 text-black rounded-md p-2 hover:scale-125 duration-500"
            onClick={() => navigate("/contact")}
          >
            get started
          </button>
        </div>
        <div className=" ">
          <img
            className="rounded-xl m-4 mt-5"
            src={Logo}
            width={700}
            alt=""
          />
        </div>
        <div className="md:hidden">
          <h1 className="capitalize text-blue-700 text-md md:text-5xl mt-14 text-xl">
            get your carrer boost with MVStructurall Engineering
          </h1>
          <h4 className="mt-5 capitalize  text-capitalize text-sm">
          
          </h4>
          <h4 className="mt-3 capitalize text-black py-2 text-sm">
            Your Trusted Partner in Civil and Structurall Engineering
            Excellence!
          </h4>

          <button className=" hidden md:block text-center bg-blue-500 text-black rounded-md p-2 hover:scale-125 duration-500">
            get started
          </button>
        </div>

        <h2 className=" text-center md:hidden"> </h2>
        <button
          className="md:hidden text-center ml-28 mt-6 bg-blue-500 text-black rounded-md p-2 hover:scale-125 duration-500"
          onClick={() => navigate("/contact")}
        >
          get started
        </button>
        <img src={w1} className="absolute  md:mt-80 -ml-10 hidden" alt="w1" />
      </div>

      <section className="w-full h-screen bg-white text-black">
        <div className="w-full">
          <img className="w-full h-screen absolute" src={ai} alt="" />
        </div>

        <div className="relative text-center font-bold pt-52 ">
          <p className="p-3 bg-white text-md md:-mt-40 shadow-lg shadow-white capitalize md:text-4xl border-blue-gray-50 border-b-2">
            {" "}<span className=" p-3 rounded animate-pulse">
            let's build your career towards <br/><br/> Safety,Stability,Sustainability{" "}
            </span>
          </p>
        </div>
      </section>

      {/*    <div className="block md:flex md:flex-col lg:text-left md:space-y-16 md:items-center md:text-center w-full h-1/3 md:h-screen p-10 mt-16">
        <div className="">
          <h1 className="capitalize text-blue-700 text-md md:text-5xl">
            Offering Master Courses
          </h1>
          <h4 className="mt-3 capitalize text-blue-700">
            Your Trusted Partner in Civil and Structurall Engineering Excellence!
            
          </h4>
          
        </div>
        <div className="">
          <ul className="bg-blue-500 p-10 md:p-20 rounded-3xl text-black capitalize text-md md:text-2xl shadow-lg shadow-blue-700 list-disc ">
            <li>ADVANCED LEVEL OF STRUCTURAL DESIGN BASED ON STAAD.PRO </li>
            <li> ADVANCED LEVEL OF RCC STEEL BASED ON ETABS</li>
            <li> BRIDGE FOUNDATIONS USING STAAD.PRO.    </li>
            <li>  DESIG AND ELEVATED METRO VIADUCTS USING STADD.PRO.  </li>
            <li>  STRUCTURAL DESIGN OF HIGH-RISE BUILDING USING ETABS  </li>
            <li> BIM (BUILDING INFORMATION MODELLING)   </li>
            <li>  INTERIOUR DESIGNING  </li>

            
          </ul>
        </div>
      </div>
       */}

      {/*  <hr className="text-blue-700 border-blue-700 border-1"/> */}

      <Stub />
      <div>
        <div className=" items-center twzt-center text-white md:grid md:grid-flow-col w-full h-auto md:h-screen bg-blue-gray-600">
          <div className="bg-black md:p-10 md:h-screen border-r-4">
            <h1 className="text-center text-blue-700 text-3xl p-4">
              {" "}
              What You Will Be Learn
            </h1>

            <ul className=" pl-28 md:pl-52 p-3 list-decimal md:text-xl">
              <li className="py-1 self-center">SUBJECTS & APPLICATIONS </li>
              <li className="py-1 self-center">SITE MANAGEMENT </li>
              <li className="py-1 self-center"> QUANTITY SURVEYING </li>
              <li className="py-1 self-center"> BAR BENDING SHEDULES </li>
              <li className="py-1 self-center">QUALITY & SAFETY MANAGEMENT </li>
              <li className="py-1 self-center">CONSTRUCTION TECHNOLOGY </li>
              <li className="py-1 self-center">STANDARD CODE KNOWLEDGE </li>
              <li className="py-1 self-center"> PLANNING & SHEDULING </li>
              <li className="py-1 self-center"> VALUBLE NOTES </li>
              <li className="py-1 self-center"> VASTU SHASTRA </li>
              <li className="py-1 self-center">ADVANCED SOFTWARE TOOLS </li>
              <li className="py-1 self-center">RESUME BUILDING </li>
            </ul>
          </div>

          <div className="bg-black p-10 md:h-screen">
            <h1 className="text-center text-blue-700 text-3xl md:p-4">
              {" "}
              What You Will Be Get
            </h1>

            <ul className="pl-20 md:pl-52 p-3 list-decimal md:text-xl">
              <li className="py-1 "> INTERNSHIP & PLACEMENT </li>
              <li className="py-1 self-center"> CERTIFICATE OF COMPLETION </li>
              <li className="py-1 self-center"> REAL TIME SITE EXPERINCE </li>
              <li className="py-1 self-center"> CLARITY ABOUT CAREER PATH </li>
              <li className="py-1 self-center"> CONFIDENCE ON INDUSTRY </li>
              <li className="py-1 self-center"> INTERVIEW EXPERIENCE </li>
              <li className="py-1 self-center">
                {" "}
                DRAWING & DESIGNING LIFE TIME EXPERT SUPPORT{" "}
              </li>
              <li className="py-1 self-center">
                {" "}
                DISCOUNTS ON MASTER PROGRAMMES{" "}
              </li>
              <li className="py-1 self-center"> MOCK INTERVIEWS </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 
      <hr className="text-blue-700 border-blue-700 border-1"/> */}

      <section className="w-full h-screen bg-white text-white">
        <div className="w-full">
          <img className="w-full h-screen absolute" src={si} alt="" />
        </div>

        <div className="relative md:pl-20 font-bold pt-32 font-mono pl-3">
          <h1 className="text-xl mt-5 uppercase md:text-3xl">Eligible Roles</h1>
          <div className="p-3 text-md mt-8 capitalize md:text-2xl list-disc ">
            <h2 className=" list-disc">SITE ENGINEER </h2>
            <h2 className=" list-disc">PLANNING ENGINEER </h2>
            <h2 className=" list-disc">QUALITY CONTROL ENGINNER </h2>
            <h2 className=" list-disc">SAFETY ENGINEER </h2>
            <h2 className=" list-disc">RESIDENT ENGINEER </h2>
            <h2 className=" list-disc">BASIC STRUCTURAL DESIGNER </h2>
            <h2 className=" list-disc">QUANITY SURVEYOR </h2>
            <h1 className=" list-disc">BILLING ENGINEER </h1>
            <h1 className=" list-disc">CIViL ENGINEER </h1>
            <h1 className=" list-disc">PROJECT ENGINEER </h1>
            <div className="mt-10 text-center bg-yellow-500 text-black animate-bounce">
         <h2>FREE Demo Session Available</h2>
         <h2>Limited Seats Per Batch</h2>
        </div>
          </div>
        </div>
        
      </section>

      <CardWithLink />
      <Experience />
      <DefaultAccordion />
      {/* 
      <PricingCard/> */}
    </div>
  );
};

export default HomeInfo;
