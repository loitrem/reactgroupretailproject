import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../context/mainContext'
import {useEffect, useContext} from 'react'
import axios from 'axios'


function ViewCategory() {

    let {cat, setCat, setProduct,productNum, setProductNum }=useContext(AppContext);
    let [catData, setCatData]=useState(null)

    useEffect(()=>{
        const getSearchData = async () => {
            let res = await axios.get('https://dummyjson.com/products'+ cat);
            setCatData(res.data.products);

        }
    getSearchData()
    },[cat])


    const navigate = useNavigate();
    useEffect(() => {
        setProduct(productNum)
    },[productNum])

    //sets new array
    let myArray = []

    //if catData is true map through catData and put is into the array
    if (catData){
        catData.map((current)=>{
            myArray.push(current)
        })
    }

    return (
        <div className='ViewAll'>
            <div className="productsWrapper">
                <div className="products">
                    <div className="productCellWrapper">
                        <div className="productCellMain">
                            {catData ? catData.map((current, i) => {
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
                            }) : <div>loading</div>}
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
      )
}
export default ViewCategory