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
                                        navigate('/viewcategory')
                                        
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
    
                    <div className="categoryText">
                            Please select a category to search
                    </div>
                    
                </div>
            </div>
                </div>
            </div>

        </div>
    )  
}

export default Categories