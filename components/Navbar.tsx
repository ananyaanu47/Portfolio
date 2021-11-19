
import Link from 'next/link'
import { FunctionComponent,useEffect, useState} from 'react'
import {useRouter} from 'next/router'

const NavItem:FunctionComponent <{
activeItem:string
setActiveItem:Function
name:string
route:string
}> =({activeItem,name,route,setActiveItem})=>{
    return  activeItem !== name ?(  
                <Link href={route}>
              <a>
                  <span 
                  className='mx-2 cursor-pointer hover:border-b-4 hover:text-pink-700'
                  onClick={()=>setActiveItem(name)} >
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
    <div className='flex items-center justify-between px-5 py-3 my-3'>
        <span className='text-xl font-bold border-b-4 border-pink-700 md:text-2xl'> {activeItem}</span>
         <div className='text-base font-normal md:text-xl'>   

            < NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
            < NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
            < NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/skills" />
    </div>
        </div>
   )
   }  
     

export default Navbar
