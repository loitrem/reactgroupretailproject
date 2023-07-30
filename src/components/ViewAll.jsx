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

        <div className="productsWrapper">
            <div className="products">

                <div className="productCellWrapper">
                    <div className="productCellMain">
                        {data.map((current, i) => {
                            return (

                                <div className="productCell">
                                <div className="showProduct" key={i} onClick={()=>{
                                    navigate('/productpage');
                                    setProduct(current)
                                    }}>
                                    <div className="productCellLeft">
                                        <div className="productImg">
                                        <img className='productLeftImg' src={current.images[0]} alt='' />
                                        </div>
                                    </div>
                                    <div className="productCellRight">
                                        <div className="productNameRight">{current.title}</div>
                                        <div className="productDescRight">{current.description}</div>
                                        <div className="productBrandRight">Brand: {current.brand}</div>
                                        <div className="productRatingRight">Customer Rating: {current.rating}</div>
                                        <div className="productPriceRight">${current.price}</div>
                                    </div>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}
export default ViewAll