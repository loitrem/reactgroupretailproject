import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";

function Categories() {
    let {categories,setCat,data}=useContext(AppContext);
    const navigate = useNavigate();
    useEffect(()=>{
        
    },[])

console.log('categories view all', categories);
    return (
        <div className='test'>categories <br/><br/><br/> 
        {categories.map((current, i)=>{
            return (
            <div className="info" key={i} onClick={()=>{
                setCat('/category/'+current)
                navigate('/viewcategory')
            }}>{current}</div>
            )
        })}
        </div>
    )  
}

export default Categories