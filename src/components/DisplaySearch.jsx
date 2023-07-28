import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';

function DisplaySearch() {
    let {data}=useContext(AppContext);

    return (
        <div>
        <div>DisplaySearch</div>
        <div>
        {data.map((current, i)=>{
            return (
            <div className="info" key={i}>{current.title}</div>
            )
        })}
    </div></div>
    )
}

export default DisplaySearch