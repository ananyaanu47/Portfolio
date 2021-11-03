import { FunctionComponent } from "react"
import { IService } from "../type"

const Servicecard:FunctionComponent<{service:IService}> = ({service:{Icon,about,title},}) => {
   
   
    
    return (
        <div className ='p-2 space-x-4 flex-items-center'>
            <Icon className='w-12 h-12 text-red-800'/>
            <div>
                <h4 className='font-bold text-white'> { title}</h4>
                <p> { about}</p>
            </div>
        </div>
    )
}

export default Servicecard
