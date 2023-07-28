// import React, {useEffect, useContext} from 'react'
// import { AppContext, navigate } from '../context/mainContext';
// import { useNavigate } from "react-router-dom";

// function ViewAll() {
//     let {call,setCall,data, setData}=useContext(AppContext);
//     const navigate = useNavigate();


// if (data){
// console.log('data view all', data);
//   return (
//     <div className='test'  onClick={()=>{
//       navigate('/viewall')
//       setCall('?limit=15')
//       console.log('CALL = ',call);
//       }}>view all <br/><br/><br/> 
//       {data.map((current, i)=>{
//         return (
//           <div className="info" key={i}>{current.title}</div>
//         )
//       })}
//     </div>
//   )
// }
  
// }

// export default ViewAll

import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../context/mainContext'
import {useEffect, useContext} from 'react'
function ViewAll() {

    let {data,setCall, setProduct,productNum, setProductNum }=useContext(AppContext);

    const navigate = useNavigate();
    useEffect(() => {
        setProduct(productNum)
    },[productNum])

    const addCount = (amount) => {
        if (productNum<10){
            setProductNum(currentProduct => {
                return currentProduct + amount
            });
        }
    }

    const reverseCount = (amount) => {
        if (productNum>0){
            setProductNum(currentProduct => {
                return currentProduct - amount
            });
        }
    }
    return (
    <div className='ViewAll'>
        <div className="mainDiv">
            <div className="previous" onClick={(reverseCount)}>View Previous Product</div>
            <div className="next" onClick={(addCount)}>View Next Product</div>
        </div>
        <div className="products">

            {data.map((current, i) => {
                return (
                    <div className="showProduct" key={i} onClick={()=>{
                        navigate('/productpage');
                        setProduct(current)
                    }}>

                        <div className="productImg">
                            {/* Image */}
                            <img src={current.image} alt='' />
                        </div>
                        <div className="productName">
                            {/* Name */}
                            {current.title}
                        </div>
                        <div className="productPrice">
                            {/* Price */}
                            ${current.price}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default ViewAll