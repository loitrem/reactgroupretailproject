import React, {useEffect, useContext, useState} from 'react'
import { AppContext } from '../context/mainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function DisplaySearch() {

    let {call, data, setProduct}=useContext(AppContext);
    let [searchData, setSearchData]=useState(null)

    const navigate = useNavigate();

    let initial = true

    let searchText = ''


    useEffect(()=>{

        const getSearchData = async () => {
            let res = await axios.get('https://dummyjson.com/products'+call);
            setSearchData(res.data.products);

        }

    getSearchData()
    initial = false
    },[call])
        return (
            <div className='ViewAll'>
        
                <div className="productsWrapper">
                    <div className="products">
        
                        <div className="searchCellWrapper">
                            <div className="searchCellMain">
                                {searchData ? searchData.map((current, i)=>{
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
                                }):<div>Loading</div>}
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }

export default DisplaySearch