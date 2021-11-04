
  import {services} from '../data'
  import ServiceCard  from '../components/Servicecard'
 import { GetServerSideProps } from "next"
 import { GetServerSidePropsContext } from "next"

  
 const index= ({endpoint}) => {
   console.log(endpoint);
   
 return (
    <div className ='flex flex-col flex-grow px-6 pt-1 text-red-600 dark:bg-dark-100'>
      <h5 className= 'my-3 font-medium'> I am currently pursuing B.Tech 3rd year in Electronics and Communication Engineering
      </h5> 
          <div className ='text-lg italic font-extrabold '>
           
          </div>
            <div className ='flex-grow p-4 mt-5 bg-yellow-500 dark:bg-dark-100' style= {{marginLeft:'-1.5rem',marginRight:'-1.5rem' }}>
            <h6 className ='my-3 font-bold tracking-wide text-x1'>
         MY Skills
          </h6>
              <div className ='grid gap-2 lg:grid-cols-1'>
                {
                  services.map(services=>(
                    <div key={services.title} className='bg-gray-200 rounded-lg dark:bg-dark-100 lg:col-span-1'>
                  <ServiceCard service ={services}/> 
                  </div>
                  )) }
              </div>
            </div>
            
    </div>
    );
  };
 
 
  export const getServerSideProps: GetServerSideProps = async (
       context: GetServerSidePropsContext
     ) => {
        //console.log(process.env.VERCEL_URL);
        //const res = await fetch('http://localhost:3000/api/services');
        //const data = await res.json();
        //console.log(data);
        return { props: { endpoint:process.env.VERCEL_URL  } };
     };
      export default index;
 

