import React, {useEffect, useContext} from 'react'
import { AppContext, navigate } from '../context/mainContext';
import { useNavigate } from "react-router-dom";

function ViewAll() {
    let {call,setCall,data, setData}=useContext(AppContext);
    const navigate = useNavigate();


if (data){
console.log('data view all', data);
  return (
    <div className='test'  onClick={()=>{
      navigate('/viewall')
      setCall('?limit=15')
      console.log('CALL = ',call);
      }}>view all <br/><br/><br/> 
      {data.map((current, i)=>{
        return (
          <div className="info" key={i}>{current.title}</div>
        )
      })}
    </div>
  )
}
  
}

export default ViewAll