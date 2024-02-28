import React from "react";
import Logo from "../assets/mvslogo.png";
import Experience from "../Fixed/boxes";
import { DefaultAccordion } from "../Fixed/Accord";
import { CardWithLink } from "../Fixed/cards";
import { PricingCard } from "../Fixed/Card2";
import { useNavigate } from "react-router-dom";
import w1 from '../assets/wave.svg'
import Stub from "../Fixed/Stub.";



const HomeInfo = () => {
const navigate=useNavigate()


 

  return (
    <div className="capitalize text-blue-700 bg-black ">
   
      <div className="block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full h-screen p-10">
        <div className="hidden md:block">
          <h1 className="capitalize text-blue-700 text-md md:text-5xl">
            get your carrer boost with MVStructurall Engineering
          </h1>
          <h4 className="mt-3 capitalize text-white">
            Your Trusted Partner in Civil and Structurall Engineering Excellence!
          </h4>
          <button className=" hidden md:block text-center mt-10 bg-blue-500 text-black rounded-md p-2 hover:scale-125 duration-500" onClick={()=>navigate('/contact')}>get started</button>
        </div>
        <div className=" ">
          <img className="rounded-xl " src={Logo} width={700} alt="" />
        </div>
        <div className="md:hidden">
          <h1 className="capitalize text-blue-700 text-md md:text-5xl mt-14 text-xl">
            get your carrer boost with MVStructurall Engineering
          </h1>
          <h4 className="mt-3 capitalize text-white py-3 text-sm">
            Your Trusted Partner in Civil and Structurall Engineering Excellence!
          </h4>
          <button className=" hidden md:block text-center bg-blue-500 text-black rounded-md p-2 hover:scale-125 duration-500">get started</button>
        </div>
        
        <h2 className=" text-center md:hidden"> </h2>
        <button className="md:hidden text-center ml-32 mt-6 bg-blue-500 text-black rounded-md p-2 hover:scale-125 duration-500" onClick={()=>navigate('/contact')}>get started</button>
        <img src={w1} className="absolute  md:mt-80 -ml-10 md:hidden" alt="w1"/>
      </div>
     
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
       <Stub/>

     

      
      
      <CardWithLink/>
      <Experience />
      <DefaultAccordion/>
    {/* 
      <PricingCard/> */}

    </div>
  );
};

export default HomeInfo;










