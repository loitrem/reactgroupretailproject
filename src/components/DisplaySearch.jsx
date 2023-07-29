import React, {useEffect, useContext, useState} from 'react'
import { AppContext } from '../context/mainContext';
import axios from 'axios';


function DisplaySearch() {

    let {call, data}=useContext(AppContext);
    let [searchData, setSearchData]=useState(null)

    let initial = true

    let searchText = ''


    useEffect(()=>{

        // if (initial){
        const getSearchData = async () => {
            let res = await axios.get('https://dummyjson.com/products'+call);
            setSearchData(res.data.products);

        }
    // }
    getSearchData()
    initial = false
    },[call])

    console.log('SEARCH TEXT ?? ', call);
    console.log('SEARCH DATA ?? ', searchData);
    return (
        <div>
        <h2>DisplaySearch</h2>
        <div>
        {searchData ? searchData.map((current, i)=>{
            return (
            <div className="displayWrapper" key={i}>
                <div className='display'>
                    <div className='image'>
                        <img src={current.images[0]}/>
                    </div>
                    <div className='titleInfo'>
                        <div className="info title">{current.title}</div>
                    </div>
                    <div className='searchInfo'>
                        <div className="info rating">Rating : {current.rating}</div>
                        <div className="info price">${current.price}</div>
                        <div className="info stock">Only {current.stock}left in stock</div>
                        <div className="info description">{current.description}</div>
                    </div>
                </div>
            </div>               
            )
        }):<div>Loading</div>}
        </div></div>
        )
    }

export default DisplaySearch