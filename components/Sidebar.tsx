
import {AiFillGithub,AiFillLinkedin,AiOutlineBook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

import {GiTie  } from "react-icons/gi";
import { useTheme } from 'next-themes';
import Image from 'next/image'

const Sidebar = () => {
    const {theme,setTheme}=useTheme();

    const changeTheme=()=>{
        setTheme(theme=="light"?"dark":"light");
    };



    return (
        <div className='dark:bg-dark-200'>
             <h3 className='italic font-extrabold text-red-900 text-3x1'> <span> Hello There</span> </h3>
            <Image
        src="/images/img3.jpeg"
        alt="Landscape"
        height="128px"
        width="128px"
        className="mx-auto border rounded-full"
        quality="100"
       />
            <h3 className='my-1 font-extrabold tracking-wider font-large text-3x1 font-Kaushan '> 
            <span className='text-red-900 text-x2'> ANANYA </span> Here  </h3>
             <p className='px-2 bg-green-200 rounded-full dark:bg-dark-200 py-1my-3'>Student in JSSSTU</p> 

             <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300 dark:bg-200 justify-items-center '
             href='../resume/resume.pdf' download='ANANYA RESUME.pdf'>
                 <AiOutlineBook className="w-6 h-6"/>Check out <br /> MY Resume</a>

{/*//email button*/}  
<button className='w-8/12 px-5 py-2 my-2 text-white rounded-full dark:bg-dark-200 bg-gradient-to-r from-pink-800 to-yellow-300 focus:outline-none' 
 onClick={() => window.open('mailto: ananyaanju47@gmail.com')} >
 Email
 </button>
<button
onClick={changeTheme}
 className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-pink-800 to-yellow-300'>Theme</button>

{/*//social media*/}
<div className='flex justify-around my-6 text-blue-500 md:w-fullmx-auto'>
    <a href='https://www.linkedin.com/in/ananya-g-r-a97635201'>
        <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
    </a>
    </div>
    <div className='flex justify-around my-6 text-gray-500'>
    <a  href='https://github.com/ananyaanu47'>
        <AiFillGithub className='w-8 h-8 cursor-pointer' />
    </a>
   
</div>

{/*//ADDRESS*/}
    <div className='px-4 my-5 bg-yellow-200 dark:bg-dark-200' style={{marginLeft: '-1rem',marginRight: '-1rem'}}>
        <div className='flex items-center justify-center space-x-2'>
            <GoLocation />
            <span>Mysore,Karntaka</span>
        </div>
            <p >ananyaanju4@gmail.com</p>
            <p className='my-2'>91+9058940372</p>
    </div>
       
     

   
</div>
    )
}

export default Sidebar
