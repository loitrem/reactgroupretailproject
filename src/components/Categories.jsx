import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";

function Categories() {
    let {categories,setCall,data, setData}=useContext(AppContext);
    const navigate = useNavigate();
    useEffect(()=>{
        
    },[])

console.log('data view all', data);
    return (
        <div className='test'>categories <br/><br/><br/> 
        {categories.map((current, i)=>{
            return (
            <div className="info" key={i} onClick={()=>{
                setCall('/category/'+current.category)
                navigate('/view')
            }}>{current.category}</div>
            )
        })}
        </div>
    )  
}

export default Categories