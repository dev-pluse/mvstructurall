import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "./firebase";

const Contact = () => {
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [textarea,setTextarea]=useState("")

  const handlesubmit= async(e)=>{
    e.preventDefault()
    const  form={name,phone:parseInt(phone),email,textarea}
    await addDoc(collection(db, 'forms'),form);
    setName('')
    setPhone("")
    setEmail("")
    setTextarea('');
  }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="pt-16 text-center text-2xl font-bold">We reach you soon</p>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2" onSubmit={handlesubmit}>
           
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e)=>setName(e.target.value)}
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
             <input
              type="text"
              name="phone"
              value={phone}
              required
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="phone number"
              minLength={10}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"

              value={textarea}
              onChange={(e)=>setTextarea(e.target.value)}
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;