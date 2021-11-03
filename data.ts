import { Iskill, IService } from './type';
 
  import { SiCodio } from 'react-icons/si'
 import{ MdDeveloperMode,MdOutlineLanguage} from 'react-icons/md'
 import {IoLogoPython} from 'react-icons/io'
 import {SiJavascript} from 'react-icons/si'
 
 
 export const services:IService[] =[
     {
        Icon:SiCodio,
         title:"Programmer in C ",
         about:"Able to code in competitive level"
         
     },
     { Icon:MdDeveloperMode,
        title:"Beginner in Front end Developer",
        about:"Able to develop basic webpages ",
        
    },
    {
        Icon:SiCodio,
         title:"Data Structures and algorithms ",
         about:"Intermediate in DSA using cpp"
         
     },
    {
        Icon:MdOutlineLanguage,
        title:"Communication",
        about:"Good in Communication Skills",
        
    },


 ]
 export const language:Iskill[] =[
 {
    Icon:SiCodio,
     name:'C',
     level:'70%',
     
 },
 {
    Icon:IoLogoPython,
     name:'python',
     level:'40%',
     
 },
 {
    Icon:SiJavascript,
     name:'Java Script',
     level:'30%',
     
 },
 
]