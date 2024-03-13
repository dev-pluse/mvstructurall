import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export function CardWithLink() {
    return (
        <div className="mt-48 md:mt-5 -m-2">
          
               <h1 className=" text-center font-bold text-2xl text-black"><span className=" border-b-4 border-blue-700 text-blue-700">MVS Services    </span></h1>
        <div className=" flex md:flex-row flex-col m-10 md:px-32 justify-between">
           
     
    
        
      <Card className="mt-6 w-80 bg-blue-700 text-black">
        <CardBody>
        
          <Typography variant="h5" color="blue-gray" className="mb-2  text-black">
          Designs
          </Typography>
          <Typography>
          Structural Designs- Residential, Industrial, institutional
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="/services" className="inline-block">
        
          </a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-80 bg-blue-700 text-black">
        <CardBody>
         
          <Typography variant="h5" color="blue-gray" className="mb-2  text-black">
          Site supervisions
          </Typography>
          <Typography>
          Construction Quality Inspection, Site Engineering, Contracts management
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="/services" className="inline-block">
       
          </a>
        </CardFooter>
      </Card>

      <Card className="mt-6 w-80 bg-blue-700 text-black">
        <CardBody>
        
          <Typography variant="h5" color="blue-gray" className="mb-2 text-black">
          Plans as per Vaastu shastra
          </Typography>
          <Typography >
          2D,3D floors plans, Structural Plans and approvals, cost Estimation
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="/services" className="inline-block">
         
          </a>
        </CardFooter>
      </Card>
    
      </div>


      <div className=" flex md:flex-row flex-col m-5 p-5 justify-between md:px-32">
      <Card className="mt-6 w-80 bg-blue-700 text-black">
        <CardBody>
       
          <Typography variant="h5" color="blue-gray" className="mb-2  text-black">
          Professional Trainings
          </Typography>
          <Typography>
          Site Engineering, Design Engineering, Quantity Surveying,  Project Management, Building Information Modelling.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="/services" className="inline-block">
            
          </a>
        </CardFooter>
      </Card>
    
        
      <Card className="mt-6 w-80 bg-blue-700 text-black">
        <CardBody>
      
          <Typography variant="h5" color="blue-gray" className="mb-2  text-black">
          Internship
          </Typography>
          <Typography>
          Internship offerings in Construction and Design forums.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="/services" className="inline-block">
         
          </a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-80 bg-blue-700 text-black">
        <CardBody>
        
          <Typography variant="h5" color="blue-gray" className="mb-2  text-black">
          Projects
          </Typography>
          <Typography>
          Live project and Thesis content support, Publication Support for Btech, MTech students.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="/services" className="inline-block">
         
          </a>
        </CardFooter>
      </Card>


      


    
    
    
      </div>




        </div>
      
    );
  }