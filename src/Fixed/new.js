import React from 'react'
import { useNavigate } from 'react-router-dom'

const YouCan = () => {
    const navigate=useNavigate()
  return (
   

        
<div>
<section class="bg-gray-900 text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class=" capitalize bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        start your own consultancy

        <span class="sm:block">  </span>
      </h1>
<ul className='capitalize bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent'>
      <li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        builder    
      </li>
      <li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        consultant    
      </li>
      <li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        contractar
      </li><li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        valuer
        </li><li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        archtech
        </li><li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        engineer
        </li><li class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Designer
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <p
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/contact"
        >
          <button className=' text-center px-5 py-2 rounded-xl hover:scale-125 duration-700' onClick={()=>navigate('/contact')}> 
          Get Started Today</button>
        </p>

       
      </div>
    </div>
  </div>
</section>


{/* <section class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Understand User Flow.
        <strong class="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section> */}


</div>

  )
}

export default YouCan