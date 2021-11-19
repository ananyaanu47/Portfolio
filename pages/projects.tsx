import Bar from '../components/Bar';
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
   
const [projects, setProjects] = useState(projectsData);
const [active, setActive] = useState("all");

const handlerFilterCategory = (category: Category | "all") => {
  if (category === "all") {
    setProjects(projectsData);
    setActive(category);
    return;
  }

  const newArray = projectsData.filter((project) =>
    project.category.includes(category)
  );
  setProjects(newArray);
  setActive(category);
};

return (


  <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
    <ProjectsNavbar
      handlerFilterCategory={handlerFilterCategory}
      active={active}
    />

    <div className="relative grid grid-cols-12 gap-4 my-3">
      {projects.map((project) => (
        <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
          <ProjectCard project={project} key={project.name} />
        </div>
      ))}
    </div>
  </div>
);
      }

    
    <div  className="bg-gray-200 dark:bg-dark-500">
    <div className='px-4 py-2 my-4 dark:bg-dark-500'>
        <div className='my-1 '>
        <div className ='flex-grow p-4 mt-3 bg-gray-200 dark:bg-dark-500' style= {{marginLeft:'-1.5rem',marginRight:'-1.5rem' }}>

            <div>
                <h5 className='my-3 font-bold text-3x1'>
                   Software Projects </h5>
                <div className ='flex items-center px-4 py-1 my-4 '>
                    <h5 className='my-3 text-center text-x1'>
                   Detection of Brain-Tumor using Matlab Lab
                    </h5>
            </div>      
                <div className ='flex items-center px-4 py-1 my-4 '>
                    <h5 className='my-3 text-center text-x1'>
              Automatic Irrigation using Arduino
                    </h5>
                   
                </div>
          </div>
    </div>
    <div className='px-4 py-2 my-4 dark:bg-dark-500'>
        <div className='my-1 '>
            <div className ='flex-grow p-4 mt-3 bg-gray-200 dark:bg-dark-500' style= {{marginLeft:'-1.5rem',marginRight:'-1.5rem' }}>
                <div>
                <h5 className='my-3 font-bold text-3x1'>
                   Hardware Projects </h5>  
                <div className ='flex items-center px-4 py-1 my-4 '>
                    <h5 className='my-3 text-center text-x1'>
                   Automatic Water Level Controller using Arduino
                    </h5>
                </div>    
            
               </div>    
                
                   
                   
                </div>
            </div>
    </div>
      </div>
      </div> 
     
</div>


export default Projects;