import { FunctionComponent } from "react"
import { icons } from "react-icons"
import { Iskill } from "../type"
const Bar:FunctionComponent<{ 
    data:Iskill
}>= ({data:{Icon, level, name}}) => {
    return (
        <div className='my-2 text-black bg-gray-500  dark:bg-dark-200 rounded-full'>
            
           <div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-300 to-blue-900'
           style={{width:level}}>
        <Icon  className="mr-3"/>
        {name}
           </div>
        </div>
    )
}

export default Bar
