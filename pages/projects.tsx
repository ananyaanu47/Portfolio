import Bar from '../components/Bar';

const projects = () => {
    return (
        
            <div className='px-4 py-2 my-4 dark:bg-dark-200'>
                <div className='grid gap-6 my-5 text-pink-400 md:grid-cols-1'>
                <div className ='flex-grow p-4 mt-5 bg-yellow-500 dark:bg-dark-100' style= {{marginLeft:'-1.5rem',marginRight:'-1.5rem' }}>

                    <div>
                        <h5 className='my-3 font-bold text-red-600 text-3x1'>
                           Software Projects </h5>
                        <div className ='flex items-center px-4 py-1 my-4 rounded-full bg-gradient-to-r from-gray-700 to-red-400'>
                            <h5 className='my-3 font-bold text-center text-x1'>
                           Detection of Brain-Tumor using Matlab Lab
                            </h5>
                    </div>      
                        <div className ='flex items-center px-4 py-1 my-4 rounded-full bg-gradient-to-r from-gray-700 to-red-400'>
                            <h5 className='my-3 font-bold text-center text-x1'>
                      Automatic Irrigation using Arduino
                            </h5>
                           
                        </div>
                  </div>
            </div>
            <div className='px-4 py-2 my-4 dark:bg-dark-200'>
                <div className='grid gap-6 my-5 text-pink-400 md:grid-cols-1'>

                    <div>
                    <div className ='flex-grow p-4 mt-5 bg-yellow-500 dark:bg-dark-100' style= {{marginLeft:'-1.5rem',marginRight:'-1.5rem' }}>
                        <h5 className='my-3 font-bold text-red-600 text-3x1'>
                           Hardware Projects </h5>
                        
                
                    
                            
                        <div className ='flex items-center px-4 py-1 my-4 rounded-full bg-gradient-to-r from-gray-700 to-red-400'>
                            <h5 className='my-3 font-bold text-center text-x1'>
                           Automatic Water Level Controller using Arduino
                            </h5>
                            
                    
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
