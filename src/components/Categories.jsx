import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';

function Categories() {
    let {call,setCall,data, setData}=useContext(AppContext);

    useEffect(()=>{

    },[])

    if (data){
    console.log('data view all', data);
        return (
            <div className='test'>categories <br/><br/><br/> 
            {data.map((current, i)=>{
                return (
                <div className="info" key={i}>{current.title}</div>
                )
            })}
            </div>
        )
    }
    
}

export default Categories