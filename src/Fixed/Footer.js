import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()
  return (
    <div className='-mt-5'>
        <hr className=' h-1'/>
        
<footer className="bg-black font-sans dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 items-center justify-center content-center">
          

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500"><button onClick={()=>navigate('/courses')}>Courses</button></p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500"><button onClick={()=>navigate('/services')}>Services</button></p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500"><button onClick={()=>navigate('/contact')}> Contact</button></p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">Teaching</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">construction</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">structural Engineering</p>
                </div>
            </div>
        </div>
        
        
        
        <div className="sm:flex sm:items-center sm:justify-between float-right">
           
            
            <div className="flex gap-4 hover:cursor-pointer mt-10">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p className="font-sans p-3 text-start md:text-center md:text-lg md:p-4 text-gray-600 mt-10">© 2024 MVStructurall Inc. All rights reserved.</p>
    </div>
</footer>
      
    </div>
  )
}

export default Footer
