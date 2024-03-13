import React from 'react'
import {Helmet} from 'react-helmet'
import im from '../assets/pexels-fauxels-3182812.jpg'
import { useNavigate } from 'react-router-dom'
import rnr from '../assets/modueimages/pexels-anamul-rezwan-1216589.jpg'
import sited from '../assets/modueimages/pexels-pixabay-159358(1).jpg'
import wc from '../assets/modueimages/pexels-yury-kim-585418.jpg'
import strd from "../assets/pexels-fauxels-3183153.jpg"
import mc from '../assets/modueimages/pexels-sora-shimazaki-5673488.jpg'
import se from '../assets/modueimages/pexels-pixabay-33266.jpg'
import c1 from '../new assets/socialmediaposts/1.png'
import c2 from '../new assets/socialmediaposts/3.png'



function Courses() {
  const navigate=useNavigate()
  return (
    <div className='bg-black overflow-x-hidden'>
        <Helmet>
        <title>Courses</title>
        <meta
          name="description"
          content=" we pride ourselves on delivering innovative and sustainable
          solutions in civil and structural engineering.- Offering Courses-  Offering Master Courses.SITE VISIT-REAL TIME EXPERINCE "
        />
        <link rel="canonical" href="https://mvstructurall.in/" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>


  

      <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={c1}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
           <span className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent'>MVStructuALL</span> Engineering
          </h2>

          <p class="mt-4 text-gray-600">
          Welcome to the MVStructuAll of structural engineering education! Our teaching offers an immersive learning experience designed to equip aspiring engineers with the knowledge and skills needed to thrive in this dynamic field. Led by industry experts, our curriculum encompasses the latest advancements in structural analysis, design principles, and construction techniques. Through hands-on workshops, interactive simulations, and real-world case studies, students gain invaluable practical insights into tackling complex engineering challenges. Our state-of-the-art facilities provide the perfect environment for fostering creativity and innovation, allowing students to explore their passion for structural engineering to its fullest potential. Whether you're a novice looking to embark on a rewarding career path or a seasoned professional seeking to expand your expertise, our teaching center is your gateway to success in the ever-evolving world of structural engineering. Join us in shaping the future of the built environment through education and excellence.
          </p>

          <button  onClick={() => navigate("/contact")}
            
            class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



  <div className=" block md:flex md:flex-col lg:text-left md:space-y-16 md:items-center md:text-center w-full h-1/3 md:h-screen p-10 ">
    <div className="">
     
      <li className="mt-3 capitalize text-center text-black">
        
        
      </li>
      <h1 className="text-blue-700 text-md md:text-5xl text-center uppercase">
        Offering Courses
      </h1>
      
    </div>
    <div className="">
      <ul className="bg-blue-500  p-10 md:p-20 rounded-3xl capitalize text-md md:text-2xl shadow-lg shadow-blue-700 list-disc ">
        <li className='md:py-1'>Site Engineering</li>
        <li className='md:py-1'> Structural Engineering</li>
        <li className='md:py-1'> Planing Engineering    </li>
        <li className='md:py-1'> Billing Engineering  </li>
        <li className='md:py-1'>  Project management
  </li>
        <li className='md:py-1'> Quantity Surveying   </li>
        <li className='md:py-1'>  Construction industrial Workshops </li>

        
      </ul>
    </div>
  </div>










    <div className=" block md:flex md:flex-col lg:text-left md:space-y-16 md:items-center md:text-center w-full h-1/3 md:h-screen p-10 ">
    <div className="">
     
      <li className="mt-3 capitalize text-center text-black">
        Your Trusted Partner in Civil and Structural Engineering Excellence!
        
      </li>
      <h1 className="text-blue-700 text-md md:text-5xl text-center uppercase">
        Offering Master Courses
      </h1>
      
    </div>
    <div className="">
      <ul className="bg-blue-500  p-10 md:p-20 rounded-3xl capitalize text-md md:text-2xl shadow-lg shadow-blue-700 list-disc ">
        <li className='md:py-1'>ADVANCED LEVEL OF STRUCTURAL DESIGN BASED ON STAAD.PRO </li>
        <li className='md:py-1'> ADVANCED LEVEL OF RCC STEEL BASED ON ETABS</li>
        <li className='md:py-1'> BRIDGE FOUNDATIONS USING STAAD.PRO.    </li>
        <li className='md:py-1'>  DESIG AND ELEVATED METRO VIADUCTS USING STADD.PRO.  </li>
        <li className='md:py-1'>  STRUCTURAL DESIGN OF HIGH-RISE BUILDING USING ETABS  </li>
        <li className='md:py-1'> BIM (BUILDING INFORMATION MODELLING)   </li>
        <li className='md:py-1'>  INTERIOUR DESIGNING  </li>

        
      </ul>
    </div>
  </div>


  <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={c2}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            
          </h2>

          <p class="mt-4 text-gray-600">
         
          Introducing groundbreaking advancements in structural engineering! Our team of expert engineers combines cutting-edge technology with innovative design principles to deliver unparalleled solutions tailored to meet your unique project requirements. From conceptualization to completion, we specialize in creating structurally sound, aesthetically pleasing designs that withstand the test of time. Leveraging state-of-the-art analysis techniques and materials, we ensure optimal performance while adhering to the highest safety standards. Whether it's designing skyscrapers that defy gravity or constructing sustainable infrastructure for the future, trust us to elevate your project to new heights. Partner with us and experience the difference that expertise, creativity, and dedication can make in shaping the world around us. Unlock the potential of your vision with our pioneering structural engineering solutions.
          </p>

          <button  onClick={() => navigate("/contact")}
            class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


  <div className='mt-5 bg-black text-white md:mt-24 md:p-10'>

    <h1 className=' text-center font-bold text-blue-700 '> <span className=' border-b-2 border-blue-500 md:text-3xl'>You Will Get Bonus</span></h1>
    <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img className=' bg-cover' src={im} alt=''/>
            <h1 className='text-blue-700 text-3xl'>CIVIL ENGINEERING FAMILY-CAREER PATHS</h1>
     
          </div>
          <div>
<li>Subject based career (structural, transportation…etc)</li>
<li>Sector based career (Private, Public)</li>
<li>Industry based career (contracting, consulting…etc)</li>
<li>Software based career (BIM, Etabs,3dsmax…etc)</li>
       
          </div>
         
          
    </div>
   <hr/>
   <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img src={rnr} alt=''/>
            <h1 className='text-blue-700 text-3xl'>Internship</h1>
     
          </div>
          <div>
<li>Site engineer, planning engineer, Quality control…. etc</li>
<li>Execution, monitoring, progress reports…. Etc</li>
<li>Construction, designing, consulting firms…etc</li>
       
          </div>
         
          
    </div>
   <hr/>
   <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img src={sited} alt=''/>
            <h1 className='text-blue-700 text-3xl'>Industrial Interactions</h1>
     
          </div>
          <div>
<li>Site surveys, site location, permission’s…. etc</li>
<li>Soil reports, project approvals, project team…. Etc</li>
<li>Safety measures, material management. Etc</li>
<li>Unit Conversions</li>

       
          </div>
         
         
          
    </div>
   <hr/>
   <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img src={strd} alt=''/>
            <h1 className='text-blue-700 text-3xl'>STRUCTURAL DRAWING -UNDERSTANDING</h1>
     
          </div>
          <div>
<li>Footing, Retaining walls.</li>
<li>SColumns, Beams, Slabs.</li>
<li>Staircase’s, Lintels.</li>


       
          </div>
         
          
    </div>
   <hr/>
   <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img src={wc} alt=''/>
            <h1 className='text-blue-700 text-3xl'>STAGES OF CONSTRUCTION-QUALITY CHECKLISTS AS PER STANDARD CODESS</h1>
     
          </div>
          <div>
<li>Earthwork</li>
<li>Concrete</li>
<li>Steel</li>
       
          </div>
         
          
    </div>
   <hr/>
   <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img src={se} alt=''/>
            <h1 className='text-blue-700 text-3xl'>Professional Skills</h1>
     
          </div>
          <div  >
          <li>get on site</li>
<li>gain on site experience</li>
<li>team skills</li>

       
          </div>
       
    </div>
   <hr/>
   <div className=' flex flex-row md:block justify-around m-4 p-1 py-10'>
          <div className='rounded-md mx-1'>
            <img src={mc} alt=''/>
            <h1 className='text-blue-700 text-3xl'>Mock Interviews</h1>
     
          </div>
          <div  >
          <li>Train for interview</li>
<li>interview preparations</li>
<li>remove the fear of interview</li>

       
          </div>
       
    </div>
   <hr/>
  
   <div className='text-center m-5'>
    <button className='bg-blue-700 text-center px-5 py-2 rounded-xl hover:scale-125 duration-700' onClick={()=>navigate('/contact')}> Enquiry</button>
  </div>
  </div>


  
  </div>
  
  )
}

export default Courses