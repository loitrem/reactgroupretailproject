import React, {useEffect, useContext, useState} from 'react'
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Categories() {
    let {categories,cat, setCat,data, product, setProduct}=useContext(AppContext);
    const navigate = useNavigate();
    let [catData, setCatData]=useState(null)


    useEffect(()=>{
        const getSearchData = async () => {
            let res = await axios.get('https://dummyjson.com/products'+ cat);
            setCatData(res.data.products);
            console.log('CAT CHANGED SO DATA IS GOING *****************************');
        }
    getSearchData()
    },[cat])


    return (
        <div className='categoriesWrapper'>
            <div className="categoriesMain">
                <div className="categoriesLeft">
                    <div className="categoriesList">
                        <ul className="catUL">
                            {categories.map((current, i)=>{
                                    return (
                                    <div className="categoryName" key={i} onClick={()=>{
                                        setCat('/category/'+current)
                                        // navigate('/viewcategory')
                                        
                                    }}><li className="catLI">{current}</li>
                                    </div>
                                )
                            })} 
                        </ul>
                    </div>
                </div>
                <div className="categoriesRight">
                    <div className="productsWrapper">
                <div className="products">
    
                    <div className="productCellWrapper">
                        <div className="productCellMain">
                            {catData ? catData.map((current, i) => {
                                return (
    
                                    <div className="productCell" key={i}>
                                    <div className="showProduct"  onClick={()=>{
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
            </div>

        </div>
    )  
}

export default Categories