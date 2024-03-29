import { Helmet } from "react-helmet";
import React from "react";
import t from "../assets/trainer.png";
import pa from "../assets/newassets/WhatsApp Image 2024-02-28 at 6.42.29 PM.jpeg";

function About() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>about mvs</title>
        <meta
          name="description"
          content=" we pride ourselves on delivering innovative and sustainable
          solutions in civil and structural engineering. With a team of
          experienced and highly skilled professionals, we are committed to."
        />
        <link rel="canonical" href="https://mvstructurall.com/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>

      <div className="items-center text-center justify-center w-full h-auto">
        <h1 className="text-4xl border-b-2 pt-5 ">About</h1>

        <div className="m-5 text-start mt-10">
          <h1 className="md:text-3xl font-bold uppercase text-center text-blue-700">
            MVStructurall{" "}
          </h1>
          <h1 className=" md:text-2xl font-bold uppercase mt-11">
            we pride ourselves on delivering innovative and sustainable
            solutions in civil and structural engineering. With a team of
            experienced and highly skilled professionals, we are committed to
            transforming ideas into reality. From conceptualization to
            construction, our comprehensive services cover every aspect of
            engineering design, site supervision, and project management.{" "}
          </h1>
        </div>
      </div>

      <img className="p-20" src={t} alt="" />

      <img className="p-20" src={pa} alt="" />
    </div>
  );
}

export default About;
