import Bar from '../components/Bar';

const projects = () => {
    return (
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



                

              
    );
}

export default projects
