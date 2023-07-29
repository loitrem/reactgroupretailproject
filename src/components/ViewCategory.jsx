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

    let myArray = []

    if (catData){
        catData.map((current)=>{
            myArray.push(current)
        })
    }

    return (
    <div className='ViewAll'>
        <div className="mainDiv">
            <div className="previous" onClick={(reverseCount)}>View Previous Product</div>
            <div className="next" onClick={(addCount)}>View Next Product</div>
        </div>
        <div className="products">

            {myArray.map((current, i) => {
                return (
                    <div className="showProduct" key={i} onClick={()=>{
                        navigate('/productpage');
                        setProduct(current)
                    }}>

                        <div className="productImg">
                            {/* Image */}
                            <img src={current.images[0]} alt='' />
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
export default ViewCategory