import { Carousel, Typography} from "@material-tailwind/react";
import ci from '../assets/newassets/construction-site-building-building-construction-working.jpg'
import tci from '../assets/pexels-fauxels-3184328.jpg'
import fci from '../assets/newassets/pexels-pixabay-416405.jpg'


 
export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-screen w-full">
        <img
          src={ci}
          alt="imag"
          className="h-full w-full object-cover" 
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4 pt-20">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome To MVStructurall
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
           we pride ourselves on delivering innovative and sustainable solutions in civil and structural engineering. 
           With a team of experienced and highly skilled professionals, we are committed to transforming ideas into reality. 
            </Typography>
          
          </div>
        </div>
      </div>
      <div className="relative h-screen w-full">
        <img
          src={tci}
          alt="ima"
          className="h-full w-full object-cover"
        />
               <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4 pt-20">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              We Provide Training
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Offering Courses, Offering Master Courses,Professional Skills,Mock Interviews,Internship
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-screen w-full">
        <img
          src={fci}
          alt="ima"
          className="h-full w-full object-cover" 
        />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4 pt-20">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
           We Provide Services
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Design, Projects, Structural Engineering, Site Supervision, Internship and Professional Training
            </Typography>
            <div className="flex gap-2">
             
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}