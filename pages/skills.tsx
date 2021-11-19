import {language} from '../data';
import Bar from '../components/Bar';
const skills = () => {
    return (
        <div className="px-4 py-2">
           <div className="grid gap-6 md:grid-cols-1">

          <div>
              <h5 className="my-3 font-bold text-x1">Education </h5>
             <div className ="">
              <h5 className="my-2 font-semibold text-x1">
                  Electronics And Communication Engineering
              </h5>
              <p className="my-3 tex-x1 "> JSSTU (2019-2023)</p>
              <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from JSS Science and Technology University,Mysuru
            </p>
          </div>
         </div>
         </div>
          <div>
             <div className ="">
              <h5 className="my-3 font-bold text-2x1 ">
                  Pre-Uinversity Education
              </h5>
              <div className="">
              <h5 className="my-3"> Marimallappa's College </h5>
            </div>
               <div className ="">
                    <h5 className="my-3 font-bold text-x1 ">
                        SSLC- KSEEB (board)
                    </h5>
                    <div className="">
                       <h5 className="my-3 text-x1"> Gangotri Public School </h5>
                 </div>
                 </div>
            </div>
               
         <div>
          <h5 className="my-3 font-bold text-2x1 ">Hobbies </h5>
        
              <h5 className="my-3 text-2x1">
                 Always Being Myself
              </h5> 
              <div className ="flex items-center px-4 py-1 ">
              <p className="text-3x1 font-semi-bold"> Drawing <br/>Reading Novels</p>
              </div>
          
          </div>   
         
         
         </div>     
       <div className="grid-gap-6 md:grid-cols-1">
           <div >
           <h5 className="my-3 font-bold text-x1 ">
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
