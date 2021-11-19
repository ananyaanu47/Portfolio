import { IconType} from 'react-icons'
import { FunctionComponent } from "react";
export interface IService {
    title:string;
    about:string,
    Icon:IconType;
}
export  interface Iskill{
    name:string;
    level:string,
    Icon:IconType,
}
export interface IProject {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    category: Category[];
   
  }
  
  export type Category = "Language" | "Iot";