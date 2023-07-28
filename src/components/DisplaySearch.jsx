import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';


function DisplaySearch() {
    let {searchData, setSearchData,call,setCall}=useContext(AppContext);
    // if (!searchData){
    //     setCall('?limit=0')
    // }
    console.log('///////////////',searchData, call);

    return (
        <div>
        <div>DisplaySearch</div>
        <div>
        {searchData.map((current, i)=>{
            return (
            <div className="info" key={i}>{current.title}</div>
            )
        })}
    </div></div>
    )
}

export default DisplaySearch