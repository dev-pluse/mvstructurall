import React from "react";
 import ad from '../assets/pexels-berk-ozdemir-3779814.jpg'
 import fS from '../assets/pexels-fauxels-3182812.jpg'
 import sk from '../assets/pexels-fauxels-3184423.jpg'
 import sw from '../assets/pexels-junior-teixeira-2047905.jpg'
 import vs from '../assets/pexels-motional-studio-1081685.jpg'
 import cci from '../assets/pexels-thisisengineering-3862636.jpg'
import w2 from '../assets/wave(2).svg'

const Experience = () => {
  const techs = [
   
    {
      id: 2,
      src: ad,
      title: "Advance design",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: fS,
      title: "future support",
      style: "shadow-blue-500",
    },
   
    {
      id: 5,
      src: sk,
      title: "we train you for soft skills",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: sw,
      title: "trainnig given for softwares ",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: vs,
      title: "improve your vison on future",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: cci,
      title: "connect between college and industry ",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-blck w-full md:h-screen md:p-1 shadow-black mt-10 md:mt-0"
    >   
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white xs:ml-5">
        <div className="pt-32 md:pt-5 text-center
        ">
          <p className="md:text-3xl rounded-md p-2 inline text-blue-700 text-center my-72 text-xl">
           <span className=" border-b-4 border-blue-700 font-bold text-center w-full" > Why MVS</span>
          </p>
          <p className="py-6"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-10 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4  text-white uppercase">{title}</p>
              
            </div>
          ))}
          
        </div>
      
      </div>
      
      <img src={w2} className="absolute -z-20 md:-rotate-180 mt-7 md:mt-0" alt=""/>
    </div>
    
  );
};

export default Experience;
