import {language} from '../data';
import Bar from '../components/Bar';
const skills = () => {
    return (
        <div className="px-4 py-2 dark:bg-dark-200">
     <div className="grid gap-6 text-blue-400 md:grid-cols-1">

      <div>
          <h5 className="my-3 font-bold text-red-600 text-3x1">Education </h5>
          <div className ="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-pink-400">
              <h5 className="my-3 font-bold text-x1">
                  Electronics And Communication Engineering
              </h5>
              <p className="text-red-900 text-3x1 font-semi-bold"> JSSTU (2019-2023)</p>
          </div>
          <div className ="flex items-center px-4 py-1 my-3 rounded-full bg-gradient-to-r from-yellow-300 to-pink-400">
              <h5 className="my-3 font-bold text-yellow-700 text-x1">
                  Pre-Uinversity Education
              </h5>
              <p className="text-3x1 font-semi-bold"> Marimallappa's College </p>
          </div>
          <div className ="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-pink-400">
              <h5 className="my-3 font-bold text-yellow-900 text-x1">
                  SSLC- KSEEB (board)
              </h5>
              <p className="text-3x1 font-semi-bold"> Gangotri Public School </p>
          </div>
          </div>       
         <div>
          <h5 className="my-3 font-bold text-pink-700 text-4x1">Hobbies </h5>
          <div className="flex items-center px-4 py-1 bg-gradient-to-r from-blue-300 to-red-300">
              <h5 className="my-3 font-bold text-x1">
                 Always Being Myself
              </h5> 
              </div>
              <div className ="flex items-center px-4 py-1 bg-gradient-to-r from-blue-300 to-red-300">
              <p className="text-red-500 text-3x1 font-semi-bold"> Drawing,Reading Novels,</p>
              </div>
          
          </div>   
         
         
         </div>     
       <div className="grid-gap-6 md:grid-cols-1">
           <div >
           <h5 className="my-3 font-bold text-3x1 ">
               Languages
            </h5>
            <div className="my-2">
                {
                    language.map(Languages=><Bar data ={Languages} key={Languages.name}/>) 
                }

            </div>
    
           </div>
           </div>     
        </div>
    );
};

export default skills;
