

import { FunctionComponent,useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/Link'

const NavItem:FunctionComponent <{
activeItem:string
setActiveItem:Function
name:string
route:string
}> =({activeItem,name,route,setActiveItem})=>{
    return  activeItem !== name ?(  
                <Link href={route}>
              <a>
                  <span onClick={()=>setActiveItem(name)} className='hover:text-red-600'>
                      {name}</span >
                  </a>
                  </Link> 
            ) : null
        }  

const Navbar = () => {
    const {pathname} =useRouter();
    const [activeItem,setActiveItem]= useState('')


useEffect(() =>{
    if(pathname ==="/")setActiveItem('About')
    if(pathname ==="/projects")setActiveItem('Projects')
    if(pathname ==="/skills")setActiveItem('Resume')



},[])



    return (
    <div className='flex justify-between px-5 py-3 my-3 dark:bg-dark-200'>
        <span className='font-bold text-red-900 border-b-4 border-red-900 md:text-2x1 dark:bg-dark-200 '> {activeItem}</span>
         <div className='flex space-x-6 text-lg text-blue-900 dark:bg-dark-200'>   

            < NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
            < NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
            < NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/skills" />
    </div>
        </div>
   )
   }  
     

export default Navbar
