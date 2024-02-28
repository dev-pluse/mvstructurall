import React from "react";
import plani from '../assets/pexels-christina-morillo-1181345.jpg'
import ii from '../assets/pexels-fauxels-3182812.jpg'
import ss from '../assets/pexels-pok-rie-1188532.jpg'
import sd from '../assets/pexels-pixabay-271667.jpg'
import ed from '../assets/pexels-karol-d-1113839.jpg'
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate=useNavigate()
  return (
    <div className="bg-black text-white">
      <div className="justify-center text-center">
        <h1 className="text-sm md:text-4xl font-bold items-center pl-50  border-b-4 p-10"> Our Services</h1>
      </div>
                              
                                                      <div className='block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full p-10 md:flex-row-reverse'>                                                 
                                                        <div className='shadow-black shadow-md p-10 rounded-3xl'>
                                                        <h1 className='capitalize text-blue-700 text-md md:text-5xl'>Engineering Design</h1>
                                                        <h4 className='mt-3 capitalize text-white'>Our expert team specializes in creating robust and cost-effective engineering designs tailored to your specific needs. Whether it's residential, commercial, or industrial projects, we are dedicated to providing creative and efficient solutions.</h4>
                                                        </div>
                                                        <div className=' '>
                                                          <img className='rounded-xl' src={ed} width={600} alt=''/>
                                                      </div>
                                                    </div>
                                                    <div className='block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full p-10 md:shadow-black shadow-sm'>                                                 
                                                        <div className='shadow-black shadow-md p-10 rounded-3xl'>
                                                        <h1 className='capitalize text-blue-700 text-md md:text-5xl'>Structural Engineering </h1>
                                                        <h4 className='mt-3 capitalize text-white'>We excel in structural engineering, ensuring the integrity and safety of buildings and infrastructure. Our designs are not only aesthetically pleasing but also meet and exceed industry standards.</h4>
                                                        </div>
                                                        <div className=' '>
                                                          <img className='rounded-xl' src={sd} width={600} alt=''/>
                                                      </div>
                                                    </div>


                                                    <div className='block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full p-10 md:flex-row-reverse md:shadow-black shadow-xs'>                                                 
                                                        <div className='shadow-black shadow-md p-10 rounded-3xl'>
                                                        <h1 className='capitalize text-blue-700 text-md md:text-5xl'>Site Supervision </h1>
                                                        <h4 className='mt-3 capitalize text-white'> Our commitment to quality extends to on-site supervision, where we ensure that construction activities align with the approved designs. Our skilled supervisors collaborate seamlessly with contractors to guarantee project success.</h4>
                                                        </div>
                                                        <div className=' '>
                                                          <img className='rounded-xl' src={ss} width={600} alt=''/>
                                                      </div>
                                                    </div>


                                                    <div className='block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full p-10 md:shadow-black shadow-md'>                                                 
                                                        <div className='shadow-black shadow-md p-10 rounded-3xl'>
                                                        <h1 className='capitalize text-blue-700 text-md md:text-5xl'>Projects</h1>
                                                        <h4 className='mt-3 capitalize text-white'> From project initiation to completion, we take pride in managing every aspect efficiently. Our project management team ensures timelines are met, costs are controlled, and quality is maintained throughout the construction process.
</h4>
                                                        </div>
                                                        <div className=' '>
                                                          <img className='rounded-xl' src={plani} width={600} alt=''/>
                                                      </div>
                                                    </div>


                                                    <div className='block md:flex lg:text-left md:justify-between  md:items-center md:text-center w-full p-10 md:flex-row-reverse md:shadow-black shadow-md'>                                                 
                                                        <div className='md:shadow-black shadow-md p-10 rounded-3xl'>
                                                        <h1 className='capitalize text-blue-700 text-md md:text-5xl'>Internship and Professional Training</h1>
                                                        <h4 className='mt-3 capitalize text-white'>Are you a budding engineer seeking hands-on experience? Explore our internship programs designed to provide you with valuable insights into the world of civil and structural engineering. Our professional training initiatives focus on enhancing your skills and preparing you for a successful career in the industry.</h4>
                                                        </div>
                                                        <div className=' '>
                                                          <img className='rounded-xl' src={ii} width={600} alt=''/>
                                                      </div>
                                                    </div>



                                                    <div className='text-center m-5'>
    <button className='bg-blue-700 text-center px-5 py-2 rounded-xl hover:scale-125 duration-700' onClick={()=>navigate('/contact')}> Enquiry</button>
  </div>
    

    </div>
    
  );
}

export default Services;


