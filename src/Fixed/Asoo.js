import React from 'react'
import adani from '../new assets/associate partners/adani.png'
import aparna from "../new assets/associate partners/aparna.png"
import tcs from "../new assets/associate partners/tata.jfif"
import ashoka from "../new assets/associate partners/ashoka.png"
import dilip from "../new assets/associate partners/dilip.png"
import gmr from "../new assets/associate partners/gmr.jfif"
import kec from "../new assets/associate partners/kec.png"
import It from "../new assets/associate partners/l & T.png"
import ncc from "../new assets/associate partners/ncc.png"
import mega from "../new assets/associate partners/mega.jfif"
import ramky from "../new assets/associate partners/ramky.jfif"
import pennar from '../new assets/associate partners/pennar.jfif'
import { useNavigate } from 'react-router-dom'










const Asoo = () => {
    const navigate=useNavigate()
  return (
    <div className='bg-white'>
  
  <section>
    <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
      <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
          <h2 class="text-3xl font-bold sm:text-4xl">Assosiative Industrial partners</h2>
  
          <p class="mt-4 text-gray-600">
            
          </p>
  
          <p
            
            class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          > <button className=' text-center px-5 py-2 rounded-xl hover:scale-125 duration-700' onClick={()=>navigate('/contact')}> 
          Get Started Today</button>
  
          </p>
        </div>
  
        <div class="grid grid-cols-2 gap-5 sm:grid-cols-3">
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
          <img src={adani}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">ADANI</h2>
  
            
          </p>
  
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={aparna}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">APARNA</h2>
  
            
          </p>
  
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={tcs}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">TATA</h2>
  
            
          </p>
  
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={ashoka}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">ASHOKA</h2>
  
          
          </p>
  
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={dilip}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">DILIP</h2>
  
            
          </p>
  
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={gmr}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">GMR</h2>
  
          
          </p>
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={kec}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">KEC</h2>
  
            
          </p>
          <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={It}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">I&T</h2>
  
            
          </p> <p
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
            <img src={ramky}/>
            </span>
  
            <h2 class="mt-10 font-bold text-center">RAMKY</h2>
  
            
          </p>
          
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Asoo