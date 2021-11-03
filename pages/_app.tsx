
import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return(  <ThemeProvider attribute="class">
  <div className='grid grid-cols-12 gap-6 px-5 overflow-hidden lg:px-48 my-14 sm:px-20 md:px-30'>
   
      
      <div className='col-span-12 p-4 overflow-hidden text-center bg-white dark:bg-black-500 lg:col-span-3 rounded-2x1 shadow-custom-light dark:shadow-custom-dark'>
      < Sidebar />
      </div>
      <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2x1 dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark'> 
        <Navbar />
      <Component {...pageProps} />
      </div>
     </div>
    </ThemeProvider>
  );
}


export default MyApp